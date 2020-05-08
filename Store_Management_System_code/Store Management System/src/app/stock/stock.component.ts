import { Component, OnInit } from '@angular/core';
import { SalerecordService } from '../salerecord.service';
import { PurchaserecordService } from '../purchaserecord.service';
import { FormsModule } from '@angular/forms';
import { SaleProduct } from '../model/saleproduct';
import { PurchaseProduct } from '../model/purchaseproduct';
//import { USE_VALUE } from '@angular/core/src/di/injector';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { StockDetails } from '../model/stockdetails';
import { Observable } from 'rxjs';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.less']
})
export class StockComponent implements OnInit {

    stockdetails : StockDetails;
    stockDetailsList : StockDetails[];

  constructor(private stockService : StockService) { }

  ngOnInit() {
    
    //get stock details
    var res = this.stockService.getStock();
    res.subscribe(response => {
      console.log(response);
      this.stockDetailsList = response;
    })
  
}
}