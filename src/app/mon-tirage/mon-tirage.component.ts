import { Component, OnInit} from '@angular/core';
import { Listepostulant } from 'src/models/listepostulant';
import { Postulant } from 'src/models/postulant';
import * as xlsx from 'xlsx';

@Component({
  selector: 'app-mon-tirage',
  templateUrl: './mon-tirage.component.html',
  styleUrls: ['./mon-tirage.component.css']
})
export class MonTirageComponent implements OnInit  {
  p!: Postulant;
  l!:Listepostulant;
  data: [][];
  constructor(){}

  ngOnInit(): void {
    
  }
  onFileChange(evt: any){
    const target: DataTransfer =  <DataTransfer>(evt.target);

    if(target.files.length !== 1) throw new Error('mauvais fichier');

    const reader: FileReader  = new FileReader();

    reader.onload = (e:any) => {
      const bstr:String = e.target.result;

      const wb: xlsx.WorkBook = xlsx.read(bstr, {type: 'binary' });
      const wsname : string = wb.SheetNames[0];
      const ws: xlsx.WorkSheet= wb.Sheets[wsname];
      console.log(ws);
      this.data = (xlsx.utils.sheet_to_json(ws, {header: 1 }));
      console.log(this.data);
    };

    reader.readAsBinaryString(target.files[0]);
  }
  

}
