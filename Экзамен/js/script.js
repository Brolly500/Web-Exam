Vue.component('task',{
  props: ['data'],
  data() {
    return {
    }
  },
  methods: {
    task_done(){
      this.$emit('task_done')
    }
  },
  template: `
  <div class="task">
    <div>
      <h3 class="task__title">{{data.title}}</h3>
      <p v-if="data.desc!=''" class="task__desc">{{data.desc}}</p>
    </div>
    <button class="task__done" @click="task_done()">✔️</button>
  </div>`
})

var btn = document.getElementById("theme-button");
var link = document.getElementById("theme-link");

btn.addEventListener("click", function () { ChangeTheme(); });

function ChangeTheme()
{
    let lightTheme = "css/light.css";
    let darkTheme = "css/dark.css";


    var currTheme = link.getAttribute("href");
    var theme = "";

    if(currTheme == lightTheme)
    {
   	 currTheme = darkTheme;
   	 theme = "dark";
    }
    else
    {    
   	 currTheme = lightTheme;
   	 theme = "light";
    }

    link.setAttribute("href", currTheme);

    Save(theme);
}

var vue = new Vue({
  el: '#app',
  data: {
    string: 'asdasda',
    new_task: {
      title: '',
      desc: ''
    },
    tasks : [
      {
        title: 'Изучить основы vue.js',
        desc: 'Попробовать написать калькулятор',
      },
      {
        title: 'Прочитать книгу "Vue.js в действии"',
        desc: '',
      }
    ]
  },
  methods: {
    add_task(){
      if(this.new_task.title != ''){
        this.tasks.push({
          title: this.new_task.title,
          desc: this.new_task.desc
        });
        this.new_task.title='';
        this.new_task.desc='';
      }
    },
    delete_task(id){
      this.tasks.splice(id,1);
    }
  }
})