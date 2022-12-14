import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {

  name = 'hello arun';

}

@Component({
  selector: 'app-hi',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HiComponent {

  name = 'hi arun';

}

@Component({
  selector: 'app-test',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class TestComponent {

  name = 'testing';

}

@Component({
  selector: 'app-illegal',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class IllegalRequestComponent {

  name = 'page Not Found 02';

}