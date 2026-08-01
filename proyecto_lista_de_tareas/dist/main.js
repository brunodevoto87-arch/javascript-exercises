/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domManager.js"
/*!***************************!*\
  !*** ./src/domManager.js ***!
  \***************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\nfunction render(projects){\n    const contentDiv = document.querySelector(\".content\");\n    contentDiv.innerHTML = \"\";\n\n    const title = document.createElement(\"h1\");\n    title.textContent = \"Mi lista de Tareas\";\n    contentDiv.appendChild(title);\n\n    const form = document.createElement(\"form\");\n    form.id = \"task-form\";\n\n    const input = document.createElement(\"input\");\n    input.type = \"text\";\n    input.placeholder = \"Escriba una tarea\";\n    input.id = \"new-task-input\";\n    form.appendChild(input);\n\n    const button = document.createElement(\"button\");\n    button.type = \"submit\";\n    button.textContent = \"Agregar tarea\";\n    form.appendChild(button);\n    contentDiv.appendChild(form);\n\n    projects.forEach((project)=>{\n        const projectDiv = document.createElement(\"div\");\n        projectDiv.textContent = `${project.name}`;\n        contentDiv.appendChild(projectDiv);\n\n        const taskList = document.createElement(\"ul\");\n        project.tasks.forEach((task, index) =>{\n            const taskItem = document.createElement(\"li\");\n            taskItem.textContent = task.title;\n\n            const checkbox = document.createElement(\"input\");\n            checkbox.type = \"checkbox\";\n            checkbox.dataset.projectId = project.id;\n            checkbox.dataset.taskIndex = index;\n\n            if (task.completed) {\n                checkbox.checked = true;\n                taskItem.style.textDecoration = \"line-through\";\n            }\n\n            taskItem.prepend(checkbox);\n\n            const deleteButton = document.createElement(\"button\");\n            deleteButton.textContent = \"X\";\n            deleteButton.dataset.projectId = project.id;\n            deleteButton.dataset.taskIndex = index;\n            taskItem.appendChild(deleteButton);\n            taskList.appendChild(taskItem);\n        });\n        contentDiv.appendChild(taskList);\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZG9tTWFuYWdlci5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0NBQW9DLGFBQWE7QUFDakQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJveWVjdG9fbGlzdGFfZGVfdGFyZWFzLy4vc3JjL2RvbU1hbmFnZXIuanM/YTIzYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gcmVuZGVyKHByb2plY3RzKXtcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJNaSBsaXN0YSBkZSBUYXJlYXNcIjtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBmb3JtLmlkID0gXCJ0YXNrLWZvcm1cIjtcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICBpbnB1dC5wbGFjZWhvbGRlciA9IFwiRXNjcmliYSB1bmEgdGFyZWFcIjtcbiAgICBpbnB1dC5pZCA9IFwibmV3LXRhc2staW5wdXRcIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWdyZWdhciB0YXJlYVwiO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCk9PntcbiAgICAgICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3REaXYudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0Lm5hbWV9YDtcbiAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcblxuICAgICAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT57XG4gICAgICAgICAgICBjb25zdCB0YXNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgIHRhc2tJdGVtLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcblxuICAgICAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICBjaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgICAgICAgICAgY2hlY2tib3guZGF0YXNldC5wcm9qZWN0SWQgPSBwcm9qZWN0LmlkO1xuICAgICAgICAgICAgY2hlY2tib3guZGF0YXNldC50YXNrSW5kZXggPSBpbmRleDtcblxuICAgICAgICAgICAgaWYgKHRhc2suY29tcGxldGVkKSB7XG4gICAgICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGFza0l0ZW0uc3R5bGUudGV4dERlY29yYXRpb24gPSBcImxpbmUtdGhyb3VnaFwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0YXNrSXRlbS5wcmVwZW5kKGNoZWNrYm94KTtcblxuICAgICAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiWFwiO1xuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLmRhdGFzZXQucHJvamVjdElkID0gcHJvamVjdC5pZDtcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5kYXRhc2V0LnRhc2tJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICAgICAgICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2tJdGVtKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodGFza0xpc3QpO1xuICAgIH0pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/domManager.js\n\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   saveData: () => (/* reexport safe */ _storageManager_js__WEBPACK_IMPORTED_MODULE_1__.saveData)\n/* harmony export */ });\n/* harmony import */ var _taskManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskManager.js */ \"./src/taskManager.js\");\n/* harmony import */ var _storageManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storageManager.js */ \"./src/storageManager.js\");\n/* harmony import */ var _domManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domManager.js */ \"./src/domManager.js\");\n\nconsole.log(\"PROJECTS IMPORTADOS:\", _taskManager_js__WEBPACK_IMPORTED_MODULE_0__.projects);\n\n\n\nconsole.log(\"Arrancando la app..\");\n\nconst savedProjects = (0,_storageManager_js__WEBPACK_IMPORTED_MODULE_1__.loadData)();\n_taskManager_js__WEBPACK_IMPORTED_MODULE_0__.projects.length = 0;\n_taskManager_js__WEBPACK_IMPORTED_MODULE_0__.projects.push(...savedProjects);\n\nif (_taskManager_js__WEBPACK_IMPORTED_MODULE_0__.projects.length === 0){\n    (0,_taskManager_js__WEBPACK_IMPORTED_MODULE_0__.addProject)(\"Proyecto por defecto\");\n}\n\n;(0,_domManager_js__WEBPACK_IMPORTED_MODULE_2__.render)(_taskManager_js__WEBPACK_IMPORTED_MODULE_0__.projects);\n\nconst form = document.querySelector(\"#task-form\");\nform.addEventListener(\"submit\",(event)=>{\n    event.preventDefault();\n    const input = event.target.querySelector(\"#new-task-input\");\n    const taskText = input.value;\n    if(!taskText) return;\n\n    (0,_taskManager_js__WEBPACK_IMPORTED_MODULE_0__.addTaskToProject)(_taskManager_js__WEBPACK_IMPORTED_MODULE_0__.projects[0].id, taskText);\n    (0,_storageManager_js__WEBPACK_IMPORTED_MODULE_1__.saveData)(_taskManager_js__WEBPACK_IMPORTED_MODULE_0__.projects);\n    (0,_domManager_js__WEBPACK_IMPORTED_MODULE_2__.render)(_taskManager_js__WEBPACK_IMPORTED_MODULE_0__.projects);\n    input.value = \"\";\n});\n\ndocument.querySelector(\".content\").addEventListener(\"click\",(evento)=>{\n    const deleteButton = evento.target.closest(\"button[data-task-index]\");\n\n    if(deleteButton){\n        const projectId = deleteButton.dataset.projectId;\n        const taskIndex = parseInt(deleteButton.dataset.taskIndex, 10);\n        (0,_taskManager_js__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(projectId, taskIndex);\n        (0,_storageManager_js__WEBPACK_IMPORTED_MODULE_1__.saveData)(_taskManager_js__WEBPACK_IMPORTED_MODULE_0__.projects);\n        (0,_domManager_js__WEBPACK_IMPORTED_MODULE_2__.render)(_taskManager_js__WEBPACK_IMPORTED_MODULE_0__.projects);\n    }\n});\n\ndocument.querySelector(\".content\").addEventListener(\"change\", (evento)=>{\n    if (evento.target.type === \"checkbox\"){\n        const projectId = evento.target.dataset.projectId;\n        const taskIndex = parseInt(evento.target.dataset.taskIndex, 10);\n        (0,_taskManager_js__WEBPACK_IMPORTED_MODULE_0__.toggleTask)(projectId, taskIndex);\n        (0,_storageManager_js__WEBPACK_IMPORTED_MODULE_1__.saveData)(_taskManager_js__WEBPACK_IMPORTED_MODULE_0__.projects);\n        (0,_domManager_js__WEBPACK_IMPORTED_MODULE_2__.render)(_taskManager_js__WEBPACK_IMPORTED_MODULE_0__.projects);\n    }\n});\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFnRztBQUNoRyxvQ0FBb0MscURBQVE7QUFDVztBQUNoQjs7QUFFdkM7O0FBRUEsc0JBQXNCLDREQUFRO0FBQzlCLHFEQUFRO0FBQ1IscURBQVE7O0FBRVIsSUFBSSxxREFBUTtBQUNaLElBQUksMkRBQVU7QUFDZDs7QUFFQSx1REFBTSxDQUFDLHFEQUFROztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLGlFQUFnQixDQUFDLHFEQUFRO0FBQzdCLElBQUksNERBQVEsQ0FBQyxxREFBUTtBQUNyQixJQUFJLHNEQUFNLENBQUMscURBQVE7QUFDbkI7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyREFBVTtBQUNsQixRQUFRLDREQUFRLENBQUMscURBQVE7QUFDekIsUUFBUSxzREFBTSxDQUFDLHFEQUFRO0FBQ3ZCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMkRBQVU7QUFDbEIsUUFBUSw0REFBUSxDQUFDLHFEQUFRO0FBQ3pCLFFBQVEsc0RBQU0sQ0FBQyxxREFBUTtBQUN2QjtBQUNBLENBQUM7O0FBRWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJveWVjdG9fbGlzdGFfZGVfdGFyZWFzLy4vc3JjL2luZGV4LmpzP2RlZjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtwcm9qZWN0cywgYWRkUHJvamVjdCwgYWRkVGFza1RvUHJvamVjdCwgZGVsZXRlVGFzaywgdG9nZ2xlVGFza30gZnJvbSBcIi4vdGFza01hbmFnZXIuanNcIjtcbmNvbnNvbGUubG9nKFwiUFJPSkVDVFMgSU1QT1JUQURPUzpcIiwgcHJvamVjdHMpO1xuaW1wb3J0IHtsb2FkRGF0YSwgc2F2ZURhdGF9IGZyb20gXCIuL3N0b3JhZ2VNYW5hZ2VyLmpzXCI7XG5pbXBvcnQge3JlbmRlcn0gZnJvbSBcIi4vZG9tTWFuYWdlci5qc1wiO1xuXG5jb25zb2xlLmxvZyhcIkFycmFuY2FuZG8gbGEgYXBwLi5cIik7XG5cbmNvbnN0IHNhdmVkUHJvamVjdHMgPSBsb2FkRGF0YSgpO1xucHJvamVjdHMubGVuZ3RoID0gMDtcbnByb2plY3RzLnB1c2goLi4uc2F2ZWRQcm9qZWN0cyk7XG5cbmlmIChwcm9qZWN0cy5sZW5ndGggPT09IDApe1xuICAgIGFkZFByb2plY3QoXCJQcm95ZWN0byBwb3IgZGVmZWN0b1wiKTtcbn1cblxucmVuZGVyKHByb2plY3RzKTtcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1mb3JtXCIpO1xuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsKGV2ZW50KT0+e1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaW5wdXQgPSBldmVudC50YXJnZXQucXVlcnlTZWxlY3RvcihcIiNuZXctdGFzay1pbnB1dFwiKTtcbiAgICBjb25zdCB0YXNrVGV4dCA9IGlucHV0LnZhbHVlO1xuICAgIGlmKCF0YXNrVGV4dCkgcmV0dXJuO1xuXG4gICAgYWRkVGFza1RvUHJvamVjdChwcm9qZWN0c1swXS5pZCwgdGFza1RleHQpO1xuICAgIHNhdmVEYXRhKHByb2plY3RzKTtcbiAgICByZW5kZXIocHJvamVjdHMpO1xuICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKGV2ZW50byk9PntcbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBldmVudG8udGFyZ2V0LmNsb3Nlc3QoXCJidXR0b25bZGF0YS10YXNrLWluZGV4XVwiKTtcblxuICAgIGlmKGRlbGV0ZUJ1dHRvbil7XG4gICAgICAgIGNvbnN0IHByb2plY3RJZCA9IGRlbGV0ZUJ1dHRvbi5kYXRhc2V0LnByb2plY3RJZDtcbiAgICAgICAgY29uc3QgdGFza0luZGV4ID0gcGFyc2VJbnQoZGVsZXRlQnV0dG9uLmRhdGFzZXQudGFza0luZGV4LCAxMCk7XG4gICAgICAgIGRlbGV0ZVRhc2socHJvamVjdElkLCB0YXNrSW5kZXgpO1xuICAgICAgICBzYXZlRGF0YShwcm9qZWN0cyk7XG4gICAgICAgIHJlbmRlcihwcm9qZWN0cyk7XG4gICAgfVxufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChldmVudG8pPT57XG4gICAgaWYgKGV2ZW50by50YXJnZXQudHlwZSA9PT0gXCJjaGVja2JveFwiKXtcbiAgICAgICAgY29uc3QgcHJvamVjdElkID0gZXZlbnRvLnRhcmdldC5kYXRhc2V0LnByb2plY3RJZDtcbiAgICAgICAgY29uc3QgdGFza0luZGV4ID0gcGFyc2VJbnQoZXZlbnRvLnRhcmdldC5kYXRhc2V0LnRhc2tJbmRleCwgMTApO1xuICAgICAgICB0b2dnbGVUYXNrKHByb2plY3RJZCwgdGFza0luZGV4KTtcbiAgICAgICAgc2F2ZURhdGEocHJvamVjdHMpO1xuICAgICAgICByZW5kZXIocHJvamVjdHMpO1xuICAgIH1cbn0pO1xuXG5leHBvcnQge3NhdmVEYXRhfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n\n}");

/***/ },

/***/ "./src/storageManager.js"
/*!*******************************!*\
  !*** ./src/storageManager.js ***!
  \*******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadData: () => (/* binding */ loadData),\n/* harmony export */   saveData: () => (/* binding */ saveData)\n/* harmony export */ });\nfunction saveData(projects){\n    const jsonString = JSON.stringify(projects);\n    localStorage.setItem(\"todoData\", jsonString);\n}\nfunction loadData(){\n    const jsonString = localStorage.getItem(\"todoData\");\n    if (jsonString){\n        return JSON.parse(jsonString);\n    }\n    else{\n        return [];\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmFnZU1hbmFnZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb3llY3RvX2xpc3RhX2RlX3RhcmVhcy8uL3NyYy9zdG9yYWdlTWFuYWdlci5qcz83ZDE1Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHNhdmVEYXRhKHByb2plY3RzKXtcbiAgICBjb25zdCBqc29uU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb0RhdGFcIiwganNvblN0cmluZyk7XG59XG5mdW5jdGlvbiBsb2FkRGF0YSgpe1xuICAgIGNvbnN0IGpzb25TdHJpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9EYXRhXCIpO1xuICAgIGlmIChqc29uU3RyaW5nKXtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoanNvblN0cmluZyk7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG59XG5leHBvcnQge3NhdmVEYXRhLCBsb2FkRGF0YX07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/storageManager.js\n\n}");

/***/ },

/***/ "./src/taskManager.js"
/*!****************************!*\
  !*** ./src/taskManager.js ***!
  \****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProject: () => (/* binding */ addProject),\n/* harmony export */   addTaskToProject: () => (/* binding */ addTaskToProject),\n/* harmony export */   deleteTask: () => (/* binding */ deleteTask),\n/* harmony export */   findProject: () => (/* binding */ findProject),\n/* harmony export */   projects: () => (/* binding */ projects),\n/* harmony export */   toggleTask: () => (/* binding */ toggleTask)\n/* harmony export */ });\nlet projects = [];\n\nfunction addProject(name){\n    const newProject = {\n        id: Date.now().toString(),\n        name: name,\n        tasks: []\n    };\n    projects.push(newProject);\n}\n\nfunction findProject(projectId){\n    return projects.find(project => project.id === projectId);\n}\n\nfunction addTaskToProject(projectId, taskText){\n    const project = findProject(projectId);\n    if(project){\n        const newTask = {\n            title: taskText,\n            completed: false,\n        };\n        project.tasks.push(newTask);\n    }\n}\n\nfunction deleteTask(projectId, taskIndex){\n    const project = findProject(projectId);\n    if(project){\n        project.tasks.splice(taskIndex, 1);\n    }\n}\n\nfunction toggleTask(projectId, taskIndex){\n    const project = findProject(projectId);\n    if(project){\n        const task = project.tasks[taskIndex];\n        if (task){\n            task.completed = !task.completed;\n        }\n    }\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGFza01hbmFnZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb3llY3RvX2xpc3RhX2RlX3RhcmVhcy8uL3NyYy90YXNrTWFuYWdlci5qcz85MzAzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBwcm9qZWN0cyA9IFtdO1xuXG5mdW5jdGlvbiBhZGRQcm9qZWN0KG5hbWUpe1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSB7XG4gICAgICAgIGlkOiBEYXRlLm5vdygpLnRvU3RyaW5nKCksXG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIHRhc2tzOiBbXVxuICAgIH07XG4gICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbn1cblxuZnVuY3Rpb24gZmluZFByb2plY3QocHJvamVjdElkKXtcbiAgICByZXR1cm4gcHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QuaWQgPT09IHByb2plY3RJZCk7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2tUb1Byb2plY3QocHJvamVjdElkLCB0YXNrVGV4dCl7XG4gICAgY29uc3QgcHJvamVjdCA9IGZpbmRQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgaWYocHJvamVjdCl7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSB7XG4gICAgICAgICAgICB0aXRsZTogdGFza1RleHQsXG4gICAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgICBwcm9qZWN0LnRhc2tzLnB1c2gobmV3VGFzayk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkZWxldGVUYXNrKHByb2plY3RJZCwgdGFza0luZGV4KXtcbiAgICBjb25zdCBwcm9qZWN0ID0gZmluZFByb2plY3QocHJvamVjdElkKTtcbiAgICBpZihwcm9qZWN0KXtcbiAgICAgICAgcHJvamVjdC50YXNrcy5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVRhc2socHJvamVjdElkLCB0YXNrSW5kZXgpe1xuICAgIGNvbnN0IHByb2plY3QgPSBmaW5kUHJvamVjdChwcm9qZWN0SWQpO1xuICAgIGlmKHByb2plY3Qpe1xuICAgICAgICBjb25zdCB0YXNrID0gcHJvamVjdC50YXNrc1t0YXNrSW5kZXhdO1xuICAgICAgICBpZiAodGFzayl7XG4gICAgICAgICAgICB0YXNrLmNvbXBsZXRlZCA9ICF0YXNrLmNvbXBsZXRlZDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHtwcm9qZWN0cywgYWRkUHJvamVjdCwgZmluZFByb2plY3QsIGFkZFRhc2tUb1Byb2plY3QsIGRlbGV0ZVRhc2ssIHRvZ2dsZVRhc2t9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/taskManager.js\n\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;