// pages/mycollec/mycollec.js
import { updateCollect, getCollect, getTags} from '../../lib/api.js'
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabType:1,
    questionId:'',
    tagArr: [],   //标签数组
    slectTag: [],                 //已选中标签数组
    inputValue:'',
    paperId:'',   //题目的唯一ID
    examId:'',   //测试id
    testList:[],   //已收藏的题目列表
  },
  backTopaper(){
    if(this.data.tabType == 1){
      wx.navigateBack({
        delta:1
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    wx.setNavigationBarTitle({
      title: '收藏夹'
    })
    if (options.questionId && options.examId && options.id){
      this.setData({
        questionId: options.questionId,
        examId: options.examId,
        paperId: options.id
      })
      this.getTagList(options.id);
    }
  },
  pushTag(e){
    var tag = e.currentTarget.dataset.tag;
    var tagArr = this.data.tagArr;
    var index = e.currentTarget.dataset.index;
    var slectTag = this.data.slectTag;
    if (slectTag.length >= 3) {
      if (slectTag.indexOf(tag) == -1){
        wx.showToast({
          title: '最多三个标签',
          icon: 'none'
        })
        return
      }
    }
    tagArr[index].status = !tagArr[index].status
    if(slectTag.indexOf(tag) == -1){
      console.log('-1')
      slectTag.push(tag);
    }else{
      slectTag.splice(slectTag.indexOf(tag),1);
    }
    
    this.setData({
      slectTag: slectTag,
      tagArr:tagArr
    })
  },
  complete(e){
    this.setData({
      inputValue: e.detail.value
    })
  },
  //点击确定按钮
  sendCollect(){
    var data = {};
    data.collect = this.data.inputValue;
    data.tag = this.data.slectTag.join('#');
    data.status = 1;
    var tagArr = this.data.tagArr;
    var qid = this.data.paperId;
    if (!qid) { return false;}
    for(var i in tagArr){
      tagArr[i].status = false;
    }
    var params = { questionId: qid,data:data};
    updateCollect(params).then((res)=>{
      console.log(res)
      if(res.code == 10000){
        wx.showToast({
          title: '收藏成功',
          success:()=>{
            this.getColectList(this.data.examId,this.data.questionId)
            this.setData({
              tabType:2,
              tagArr
            })
          }
        })
      }else{
        wx.showToast("收藏失败");
      }
    })
  },
  tabHandle(e){
    var type = e.currentTarget.dataset.type;
    var examId = this.data.examId, questionId = this.data.questionId;
    this.setData({
      tabType:type
    })
    if (type == 2) {
      if (!examId || !questionId) { return false;}
      this.getColectList(this.data.examId, this.data.questionId);
    }
  },
  getColectList(examId,questionId){
    var params = {
      examId:examId,
      questionId:questionId
    }
    getCollect(params).then((res)=>{
      console.log(res)
      if(res.code == 10000){
        var oldArr = res.data;
        for(let i =0;i<oldArr.length;i++){
          oldArr[i].answerPostion = oldArr[i].answerPostion ? JSON.parse(oldArr[i].answerPostion) : [];
          try{
            oldArr[i].answerPostion.length>0?oldArr[i].answerPostion[0].url.substring(0):''
          }catch(err){
            oldArr[i].answerPostion = JSON.parse(oldArr[i].answerPostion)
          }
          
          oldArr[i].label = oldArr[i].label.split('#');
        }
        this.setData({
          testList: oldArr
        })
      }else if(res.code == 10029){
        this.setData({
          testList: []
        })
      }
    })
  },
  /*取消收藏*/
  deleteColect(e){
    var id = e.currentTarget.dataset.id;
    var data = {};
    data.collect = '';
    data.tag = '';
    data.status = 0;
    if (!id) { return false;}
    var params = { questionId: id, data: data };
    updateCollect(params).then((res) => {
      console.log(res)
      if (res.code == 10000) {
        this.getColectList(this.data.examId, this.data.questionId)
      }
    })
  },
  /*去回评*/
  goMarking(e){
    var index = e.currentTarget.dataset.index;
    var testList = this.data.testList;
    app.globalData.commentData = testList[index];
    wx.navigateBack({
      delta: 1
    })
  },
  //获取推荐标签
  getTagList(questionId){
    var params = {
      questionId
    }
    getTags(params).then((res)=>{
      console.log(res)
      if(res.code == 10000){
        var tags = [];
        if(res.data.length != 0){
          for(let i in res.data){
            tags.push({name: res.data[i], status: false})
          }
        }
        this.setData({
          tagArr: tags
        })
      }else if(res.code == 10029){
        this.setData({
          tagArr: []
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})