import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Todo } from '../interfaces/todo';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [
    {
      task: "go to class",
      isComplete: true,
    },
    {
      task: "finish technical resume",
      isComplete: false,
    },
    {
      task: "contact karen",
      isComplete: false,
    },
    {
      task: "finished lab",
      isComplete: true,
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
  addTask = (form: NgForm): void => {
    let newTask: Todo = {
      task: form.form.value.taskname,
      isComplete: form.form.value.complete === 'yes',
    };
    this.todos.push(newTask);
  };

  deleteTask = (index: number): void => {
    this.todos.splice(index, 1);
  };

  /* 
  toggleComplete = (todos: Todo): void => {
    todos.isComplete = !todos.isComplete;
  }; 
  */
}
