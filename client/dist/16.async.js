(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{EriM:function(e,t,a){"use strict";var s=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(a("mK77"));a("zYxU");var n=s(a("sY/z")),u=s(a("Ico4")),c=a("ezbJ"),o=a("WMoM"),p={namespace:"task",state:{page:1,pageSize:10,tasks:[],total:0},effects:{fetchTasks(e,t){return u.default.mark(function a(){var s,r,n,c;return u.default.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return s=e.payload,r=t.call,n=t.put,a.next=4,r(o.queryTaskLists,s);case 4:return c=a.sent,a.next=7,n({type:"show",response:c,payload:s});case 7:case"end":return a.stop()}},a)})()},createTasks(e,t){return u.default.mark(function a(){var s,r,p;return u.default.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return s=e.payload,r=t.call,p=t.put,a.next=4,r(o.queryCreateTask,s);case 4:return n.default.success((0,c.formatMessage)({id:"task.operation.create-task-success"})),a.next=7,p({type:"reload"});case 7:case"end":return a.stop()}},a)})()},editTask(e,t){return u.default.mark(function a(){var s,r,p,d;return u.default.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return s=e.id,r=e.payload,p=t.call,d=t.put,a.next=4,p(o.queryEditTask,s,r);case 4:return n.default.success((0,c.formatMessage)({id:"task.operation.edit-task-success"})),a.next=7,d({type:"reload"});case 7:case"end":return a.stop()}},a)})()},removeTask(e,t){return u.default.mark(function a(){var s,r,p;return u.default.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return s=e.id,r=t.call,p=t.put,a.next=4,r(o.queryRemoveTask,s);case 4:return n.default.success((0,c.formatMessage)({id:"task.operation.delete-task-success"})),a.next=7,p({type:"reload"});case 7:case"end":return a.stop()}},a)})()},reload(e,t){return u.default.mark(function e(){var a,s,r,n,c,o;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=t.put,s=t.select,e.next=3,s();case 3:return r=e.sent,n=r.task,c=n.page,o=n.pageSize,e.next=8,a({type:"fetchTasks",payload:{page:c,pageSize:o}});case 8:case"end":return e.stop()}},e)})()}},reducers:{show(e,t){return(0,r.default)({},e,t.payload,{tasks:t.response.results,total:t.response.count})}}};t.default=p}}]);