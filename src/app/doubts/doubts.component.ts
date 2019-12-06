import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material';

@Component({
  selector: 'td-doubts',
  templateUrl: './doubts.component.html',
  styleUrls: ['./doubts.component.scss']
})
export class DoubtsComponent implements OnInit {


  panelOpenState = false;

  accordionList: any;
  icon: boolean = false;



  @ViewChild('accordion', { static: true }) Accordion: MatAccordion

  constructor() {
    this.accordionList = [
      {
        id: "panel-1",
        title: "Panel One",
        description: "Description One",
        isDisabled: false,
        isExpanded: false
      }, {
        id: "panel-3",
        title: "Panel Three",
        description: "Description Three",
        isDisabled: false,
        isExpanded: true
      },
    ]
  }

  ngOnInit() {
  }

  beforePanelClosed(panel) {
    panel.isExpanded = false;
    console.log("Panel going to close!");
  }
  beforePanelOpened(panel) {
    panel.isExpanded = true;
    console.log("Panel going to  open!");
  }

  afterPanelClosed() {
    console.log("Panel closed!");
  }
  afterPanelOpened() {
    console.log("Panel opened!");
  }


  closeAllPanels() {
    this.Accordion.closeAll();
  }
  openAllPanels() {
    this.Accordion.openAll();
  }


  click() {
    this.icon = !this.icon;
  }
}




