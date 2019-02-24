import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  form = new FormGroup({
    salarioBase: new FormControl('', Validators.required),
    quinquenio: new FormControl('', Validators.required),
    apostilamento: new FormControl('', Validators.required),
    adcNoturno: new FormControl('', Validators.required),
    insalubridade: new FormControl('', Validators.required),
    periculosidade: new FormControl('', Validators.required),
  });



  formSubtraidos = new FormGroup({
    inss: new FormControl('', Validators.required),
    previdencia: new FormControl('', Validators.required),
    IRRF: new FormControl('', Validators.required),
    pensao: new FormControl('', Validators.required),
    valeTransporte: new FormControl('', Validators.required),
    planoSaude: new FormControl('', Validators.required),
  });

  formOutrasDespesas = new FormGroup({
    outrosEmprestimos: new FormControl('', Validators.required),
    despesasPlanoSaude: new FormControl('', Validators.required),
    outrasMensalidades: new FormControl('', Validators.required),
    convenios: new FormControl('', Validators.required),
  });

  get outrosEmprestimos() {
    return this.formOutrasDespesas.get('outrosEmprestimos').value;
  }
  get despesasPlanoSaude() {
    return this.formOutrasDespesas.get('despesasPlanoSaude').value;
  }
  get outrasMensalidades() {
    return this.formOutrasDespesas.get('outrasMensalidades').value;
  }
  get convenios() {
    return this.formOutrasDespesas.get('convenios').value;
  }


  salarioBruto: number;
  totalSubtraidos: number;
  outrasDespesas: number;
  totalMargem: number;
  constructor() {}


  get salarioBase() {
    return this.form.get('salarioBase').value;
  }

  get quinquenio() {
    return this.form.get('quinquenio').value;
  }

  get apostilamento() {
    return this.form.get('apostilamento').value;
  }

  get adcNoturno() {
    return this.form.get('adcNoturno').value;
  }

  get insalubridade() {
    return this.form.get('insalubridade').value;
  }

  get periculosidade() {
    return this.form.get('periculosidade').value;
  }


  //Subtraidos

  get inss() {
    return this.formSubtraidos.get('inss').value;
  }
  get previdencia() {
    return this.formSubtraidos.get('previdencia').value;
  }

  get IRRF() {
    return this.formSubtraidos.get('IRRF').value;
  }

  get pensao() {
    return this.formSubtraidos.get('pensao').value;
  }

  get valeTransporte() {
    return this.formSubtraidos.get('valeTransporte').value;
  }


  get planoSaude() {
    return this.formSubtraidos.get('planoSaude').value;
  }


  ngOnInit() {}
  calcular() {
    console.log(this.salarioBase);
    this.salarioBruto = this.salarioBase + this.quinquenio +
      this.apostilamento + this.adcNoturno + this.insalubridade + this.periculosidade;
  }

  calcularSubtraidos() {
    alert('dsadsa');
    this.totalSubtraidos = (this.inss + this.previdencia +
      this.IRRF + this.pensao + this.valeTransporte + this.planoSaude);
  }

  calculaTotal() {
    this.outrasDespesas = this.outrasDespesas + this.despesasPlanoSaude + this.outrasMensalidades + this.convenios;
    this.totalMargem = 0.3 * (this.salarioBruto - this.salarioBruto) - this.outrasDespesas;
  }
}
