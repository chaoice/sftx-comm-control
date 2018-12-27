<template>
  <div style="background: #f6f6f6;padding:2em">
    <div :class="$style.header">

      <svg    x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
<g><path d="M974.3,217.3L812.9,378.7l-141.2-50.4l-50.4-141.2L782.7,25.7C676.8-9.7,555.3,14.7,470.9,99c-82.8,82.8-107.8,201.3-75.2,305.8c-4.4,3.5-8.6,7.2-12.7,11.2L51.6,747.5c-55.5,55.5-55.5,145.4,0,200.9c55.5,55.5,145.4,55.5,200.9,0L584,616.9c4-4,7.8-8.3,11.2-12.7c104.5,32.6,223.1,7.6,305.8-75.2C985.3,444.7,1009.7,323.2,974.3,217.3z"/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></g>
</svg>
      <h1 >工具栏</h1>
    </div>
    <div :class="$style.content">
      <ul :class="$style.tool">
        <li v-for="(tool,index) in toolBar" :key="index">
          <button :class="$style.button" @click="addClick(tool)">{{tool.name}}</button>
        </li>
      </ul>
    </div>
    <div :class="$style.header">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
<metadata> Svg Vector Icons : http://www.sfont.cn </metadata>
<g><path d="M182.2,37.7c20.6-0.1,41.2-0.1,61.9,0c3.2,3.4,6.5,6.6,9.8,9.8c0.1,51.1,0,102.3,0.1,153.4c51.1,0.1,102.3-0.1,153.4,0.1c2.8,3,5.8,5.9,8.8,8.8c0.1,21,0.1,42,0,62.9c-3,2.8-5.9,5.8-8.8,8.8c-51.1,0.1-102.3,0-153.4,0.1c-0.1,51.2,0.1,102.3-0.1,153.4c-3.4,3.2-6.6,6.5-9.8,9.8c-20.6,0.1-41.3,0.1-61.9,0c-3.2-3.4-6.5-6.6-9.8-9.8c-0.1-51.1,0-102.3-0.1-153.4c-51.1-0.1-102.3,0.1-153.4-0.1c-2.8-3-5.8-5.9-8.8-8.8c-0.1-21-0.1-42,0-62.9c3-2.8,5.9-5.8,8.8-8.8c51.2-0.1,102.3,0,153.4-0.1c0.1-51.1-0.1-102.3,0.1-153.4C175.7,44.3,179,41,182.2,37.7L182.2,37.7z"/><path d="M581,195.7c126-0.1,251.9-0.1,377.9,0c2.8,3,5.8,5.9,8.8,8.8c0.1,21,0.1,42,0,62.9c-3,2.8-5.9,5.8-8.8,8.8c-126,0.1-252,0.1-377.9,0c-2.9-3-5.8-5.9-8.8-8.8c-0.1-21-0.1-42,0-62.9C575.2,201.6,578.1,198.7,581,195.7L581,195.7z"/><path d="M727.3,536.1c27.3-0.1,54.7-0.1,82,0c2.8,3,5.8,5.9,8.8,8.8c0.1,28.4,0.1,56.8,0,85.2c-3,2.8-5.9,5.8-8.8,8.8c-27.3,0.1-54.7,0.1-82,0c-2.8-3-5.8-5.9-8.8-8.8c-0.1-28.4-0.1-56.8,0-85.2C721.5,542.1,724.5,539.1,727.3,536.1L727.3,536.1z"/><path d="M15.4,599c17-16.7,33.7-33.8,50.7-50.5c22.7,19,41.5,42.3,64,61.6c27.2,27.8,55.3,54.8,83.2,81.7c49.3-47.3,97.1-96.2,146.7-143.1c17.3,16.4,33.7,33.8,50.8,50.4c0.1,5.1,0.1,10.1,0,15.2c-45.5,45.2-92.9,88.4-138,134c45.5,45.8,92.4,90.3,138,136.1c0.1,5.1,0.1,10.2,0,15.3c-18.5,15.1-35.8,31.7-54.1,47.1c-48.7-45.8-95.3-93.9-143.8-140c-48.4,46.4-96.7,93-145.1,139.5c-0.4,0.1-1.2,0.3-1.6,0.3c-17.2-15.3-33.4-32.1-51-47.1c-0.1-5.1-0.1-10.2,0-15.2c46-45.9,93.2-90.5,138.8-136.8c-46.6-44-92.6-88.8-138.8-133.3C15.3,609.1,15.3,604.1,15.4,599L15.4,599z"/><path d="M558.7,707.9c140.8-0.1,281.6-0.1,422.5,0c2.8,3,5.8,5.9,8.8,8.8c0.1,20.6,0.1,41.2,0,61.9c-3.4,3.2-6.6,6.5-9.8,9.8c-140.5,0.1-280.9,0.1-421.4,0c-2.8-3-5.8-5.9-8.8-8.8c-0.1-21-0.1-42,0-62.9C552.9,713.9,555.8,710.9,558.7,707.9L558.7,707.9z"/><path d="M727.3,859.6c27.3-0.1,54.7-0.1,82,0c2.8,3,5.8,5.9,8.8,8.8c0.1,28.4,0.1,56.8,0,85.2c-3,2.8-5.9,5.8-8.8,8.8c-27.3,0.1-54.7,0.1-82,0c-2.8-3-5.8-5.9-8.8-8.8c-0.1-28.4-0.1-56.8,0-85.2C721.5,865.5,724.5,862.6,727.3,859.6L727.3,859.6z"/></g>
</svg>
      <h1>表达式</h1>
    </div>
    <div :class="$style.content">
      <ul :class="$style.expUl" >
        <draggable v-model="opDatas">
          <transition-group  name="list"
                             v-on:before-enter="beforeEnter"
                             v-on:enter="enter"
                             v-on:leave="leave"
                             :move-class="$style.fliplistmove" tag="p">
            <li v-for="(opds,indexop) in opDatas" :key="indexop" :style="{width:opds.template.type==='label'?'auto':'auto'}">
              <svg @click="deleteClick(opds)"  version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
<metadata> Svg Vector Icons : http://www.sfont.cn </metadata>
<g><g><path d="M500,10C229.3,10,10,229.4,10,500s219.3,490,490,490s490-219.4,490-490S770.7,10,500,10z M727.1,640.4c23.9,23.9,23.9,62.7,0,86.6C715.1,739,699.4,745,683.8,745c-15.7,0-31.4-6-43.3-17.9L500,586.6L359.6,727.1C347.6,739,331.9,745,316.3,745c-15.7,0-31.4-6-43.3-17.9c-23.9-23.9-23.9-62.7,0-86.6L413.4,500L272.9,359.6c-23.9-23.9-23.9-62.7,0-86.6s62.7-23.9,86.6,0L500,413.4l140.4-140.4c23.9-23.9,62.7-23.9,86.6,0s23.9,62.7,0,86.6L586.6,500L727.1,640.4L727.1,640.4z"/></g></g>
</svg>
              <!--<img src="./assert/delete.png" @click="deleteClick(opds)"/>-->
              <select  v-model="opds.template.value" v-if="opds.template.type==='select'" >
                <option  v-for="(op,selectIndex) in getThis[opds.template.source]" :value="op[getThis[opds.template.valueField]]" :key="selectIndex">
                  {{op[getThis[opds.template.textField]]}}
                </option>
              </select>
              <input type="text" v-model="opds.template.value" v-if="opds.template.type==='input'"/>
              <input type="text" v-model="opds.name"  disabled v-if="opds.template.type==='label'"/>
            </li>
          </transition-group>
        </draggable>
      </ul>
    </div>
    <div :class="$style.header">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
<metadata> Svg Vector Icons : http://www.sfont.cn </metadata>
<g><path d="M738,402H261.2c-15.5,0-28,12.5-28,28c0,15.5,12.5,28,28,28h476.9c15.5,0,27.9-12.6,27.9-28C766,414.5,753.5,402,738,402z M878,10H122c-30.9,0-56,25-56,56v868.1c0,30.8,25,55.9,56,55.9h600l212-232V66C934.1,35,908.9,10,878,10z M878,734.1L694,934.1H172.8c-28,0-50.8-22.2-50.8-49.7V115.5C122,88.2,144.7,66,172.8,66h654.6c27.9,0,50.7,22.2,50.7,49.6L878,734.1L878,734.1z M738,234H261.2c-15.5,0-28,12.6-28,28c0,15.6,12.5,28,28,28h476.9c15.5,0,27.9-12.5,27.9-28C766,246.5,753.5,234,738,234z M738,570.1H261.2c-15.5,0-28,12.5-28,27.9s12.5,28,28,28h476.9c15.5,0,27.9-12.5,27.9-28C766.1,582.5,753.5,570.1,738,570.1z"/><path d="M688.6,797.4c0-33.8,27.3-61,61-61h91.4l30.4-30.4H719.2c-33.8,0-61,27.3-61,60.9v152.5l30.4-30.4L688.6,797.4L688.6,797.4z"/></g>
</svg>
      <h1>结果</h1>
    </div>
    <div :class="$style.content">
      {{resultExp}}
    </div>

    <button :class="[$style.button,$style.submitButton]" @click="cancleClick">取消</button>
    <button :class="[$style.button,$style.submitButton]" @click="saveClick">保存</button>


  </div>

</template>

<script>
  import Velocity from 'velocity-animate';
  import draggable from 'vuedraggable'
  import Vue from 'vue';


  var Expression=
    {
      created(){
        //判断传进来的
        console.log('createed');
      },
      name: "Expression",
      props: {
        ops: {
          type: Array,
        },
        opsText:{
          type:String,
        },
        opsValue:{
          type:String,
        },
        exps:{
          type: Array,//运算符 {name:'幂^',value:'^'}
        },
      },

      data(){
        //默认的添加上外围传的。
        let toolBar=[
          {
            name:'因子'
            ,template:{
              type:'select',
              source:'ops',
              textField:'opsText',
              valueField:'opsValue',
              value:''

            }
          },
          {
            name:'输入'
            ,template:{
              type:'input',
              value:''
            }
          },
          {
            name:'('
            ,template:{
              type:'label',
              value:'('
            }
          },
          {
            name:')'
            ,template:{
              type:'label',
              value:')'
            }
          },
          {
            name:'+'
            ,template:{
              type:'label',
              value:'+'
            }
          },
          {
            name:'-'
            ,template:{
              type:'label',
              value:'-'
            }
          },
          {
            name:'*'
            ,template:{
              type:'label',
              value:'*'
            }
          },
          {
            name:'/'
            ,template:{
              type:'label',
              value:'/'
            }
          },
          {
            name:'%'
            ,template:{
              type:'label',
              value:'%'
            }
          },


          {
            name:'幂^'
            ,template:{
              type:'label',
              value:'^'
            }
          },

        ].concat(this.exps.map(x=>{
          return {
            name:x.name,
            template:{
              type:'label',
              value:x.value,
              bracket:x.bracket
            }
          }
        }));
        //去重
        for(let i=0,len=toolBar.length;i<len;)
        {
          if(toolBar.filter(x=>{return x.template.type==='label'&&x.template.value===toolBar[i].template.value;}).length>1)
          {
            toolBar.splice(i,1);
            len--;
          }
          else {
            i++;
          }
        }
        return {
          data:"",
          key:"",
          opDatas:[],
          value:"opnAmt",
          opval:"-",
          toolBar:toolBar
        };
      },
      watch:{
        data:function () {
          let dataStr=this.data;
          this.toolBar.forEach(x=>{
            if(x.template.type==='label') {

              let reg=new RegExp("['"+x.template.value+"']",'g');
              if(x.template.value.length>1)
              {
                reg=new RegExp(x.template.value,'g');
              }
              dataStr = dataStr.replace(reg, ',' + x.template.value + ',');
            }
          });
          dataStr=dataStr.replace(/(^,*)|(,*$)/g, "");
          this.opDatas=dataStr.split(',').filter(z=>{return z!=undefined&&z!=''}).map(x=>{

            //是否是因子
            let op=this.ops.find(y=>{return y[this.opsValue]===x});
            if(op!=undefined)
            {
              return {
                name:'因子'
                ,template:{
                  type:'select',
                  source:'ops',
                  textField:'opsText',
                  valueField:'opsValue',
                  value:x

                }
              };
            }
            //操作符
            let tool=this.toolBar.find(y=>{return y.template.type==='label'&&y.template.value===x;});
            if(tool!=undefined)
            {
              return JSON.parse(JSON.stringify(tool));
            }
            else
            {
              //输入
              return {
                name:'输入'
                ,template:{
                  type:'input',
                  value:x
                }
              };
            }
          });
          console.log('data change');
        }

      }
      ,
      methods:{
        beforeEnter: function (el) {
          el.style.opacity = 0
          el.style.height = 0
        },
        enter: function (el, done) {
          var delay = el.dataset.index * 150
          setTimeout(function () {
            Velocity(
              el,
              { opacity: 1, height: '1.6em' },
              { complete: done }
            )
          }, delay)
        },
        leave: function (el, done) {
          var delay = el.dataset.index * 150
          setTimeout(function () {
            Velocity(
              el,
              { opacity: 0, height: 0 },
              { complete: done }
            )
          }, delay)
        },
        saveClick(){
          this.$emit('save');
          this.opDatas=[];
          this.data="";
        },
        cancleClick(){
          this.$emit('cancle');
          this.opDatas=[];
          this.data="";
        },
        addClick(tool){
          //如果有括号去掉操作符后面的括号
          if(tool.template.bracket!=undefined)
          {
            this.opDatas=[...this.opDatas,JSON.parse(JSON.stringify(tool))
              ,{name:"(",template:{type:"label",value:"("}}
              ,{name:")",template:{type:"label",value:")"}}];
          }
          else {
            this.opDatas = [...this.opDatas, JSON.parse(JSON.stringify(tool))];
          }
        },
        deleteClick:function (opds) {
          let rowIndex= this.opDatas.indexOf(opds);
          this.opDatas.splice(rowIndex,1);
        }

      },
      computed:{
        listerns(){
          return {
            ...this.$listeners,
            input: event => this.$emit('input', event.target.value),
          }
        },
        resultExp(){
          return this.opDatas.map(x=>{
            return x.template.value;
          }).join("");
        },
        getThis(){
          return this;
        }
      },
      components: {
        draggable,
      }

    }
  function ExpressionApp(el,ops,opsText,opsValue,exps,save,cancle,data) {
    const vueapp=new Vue({
      el: el,
      components: { Expression },
      template: '<Expression :ops="ops" opsText="name" opsValue="value" :exps="exps"  v-on:save="save" v-on:cancle="cancle"/>',
      data:{
        ops:ops,
        exps:exps
      },
      methods:{
        save() {
          // alert('save, data='+this.$children[0].resultExp);
          save.call(this,this.$children[0].resultExp);
          //进行业务处理
          //关闭窗口
        },
        cancle() {
          // alert('cancle');
          cancle.call(this);
          //关闭窗口
        }
      }
    })
    var expressVm=vueapp.$children[0];
    expressVm.data=data;
    return expressVm;
  }
  export default Expression;
  export {ExpressionApp};
</script>
<style lang="scss" module>
  .header{
    svg{
      padding:0 2em;
      width: 20px;
      float: left;
    }
  }
  h1{
    font-size: 20px;
    font-weight: 700;
    line-height: 26px;
  }
  .button{
    color: #a59b99;
    display: block;
    font-size: 1em;
    font-weight: bold;
    width: 150px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: azure;
    margin: 0 auto 14px;
    box-shadow: 3px 3px 5px #efc4b0;
    letter-spacing: 2px;
    cursor: pointer;
  }
  .submitButton{
    float: right;
    margin:10px 100px 10px 0;
  }
  .content{
    width: 90%;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    background: #f3eeee;
    box-shadow: 0 0 2px grey;
    margin: 1em 2em;
    padding: 1em;
  }
  .tool {
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    background: #f3eeee;
    line-height: 40px;
    li{
      display: inline-block;
      position: relative;
      margin: 0 0.6em;

    }
  }
  .expUl{
    list-style-type: none;
    width: 100%;
    svg{
      position: relative;
      top: -1em;
      right: 1em;
      width: 1em;
      cursor: pointer;
    }
    li{
      background: #f0ffff;
      display: inline-block;
      position: relative;
      margin: 0.6em 0.6em;
      width: auto;
      box-shadow: 3px 3px 5px #efc4b0;
      &:hover {
        box-shadow: 0px 0px 4px 3px #81d4b4;
      }
      padding:10px;
      select,input{
        width: 8em;
        height: 100%;
        font-size: 1em;
        background: azure;
        border: aliceblue;
        font-weight: bold;
        color: #72b0e6;
        cursor: pointer;
      }
    }
  }
  .fliplistmove {
    transition: transform 1s;
  }


</style>
