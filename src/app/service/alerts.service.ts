import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertsComponent } from '../alerts/alerts.component';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(private bsmodal: BsModalService) { }

  private showAlert(message: string, type: string){
    const bsModalRef: BsModalRef = this.bsmodal.show(AlertsComponent);

    bsModalRef.content.message = message;
    bsModalRef.content.type = type;
  }

  showAlertDanger(message: string){
    this.showAlert(message,'danger');
  }

  showAlertWarning(message: string){
    this.showAlert(message,'warning');
  }

  showAlertSuccess(message: string){
    this.showAlert(message,'success');
  }

}
