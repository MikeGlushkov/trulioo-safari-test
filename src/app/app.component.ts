import {Component, OnInit} from '@angular/core';
// @ts-ignore
import TruliooClient from 'trulioo-embedid-client/src/TruliooClient';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'trulioo-safari-test';

  ngOnInit() {
    const config = {
      publicKey: '13a31ef954ab4b5a9f69b3da4556155c',
      accessTokenURL: 'https://test-back.michaelglushkov.repl.co',
      handleResponse: this.handleVerificationResponse.bind(this)
    };
    // eslint-disable-next-line no-new
    // tslint:disable-next-line:no-unused-expression
    new TruliooClient(config);
  }

  // tslint:disable-next-line:typedef
  handleVerificationResponse(res: any) {
    console.log(res);d
  }
}
