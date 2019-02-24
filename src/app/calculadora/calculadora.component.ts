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

  get outrosEmprestimos(): number {
    return this.zeroIfEmpty(this.formOutrasDespesas.get('outrosEmprestimos').value);
  }
  get despesasPlanoSaude(): number {
    return this.zeroIfEmpty(this.formOutrasDespesas.get('despesasPlanoSaude').value);
  }
  get outrasMensalidades(): number {
    return this.zeroIfEmpty(this.formOutrasDespesas.get('outrasMensalidades').value);
  }
  get convenios(): number {
    return this.zeroIfEmpty(this.formOutrasDespesas.get('convenios').value);
  }


  salarioBruto: number;
  totalSubtraidos: number;
  outrasDespesas: number;
  totalMargem: number;
  constructor() {}


  get salarioBase(): number {
    return this.zeroIfEmpty(this.form.get('salarioBase').value);
  }

  get quinquenio(): number {
    return this.zeroIfEmpty(this.form.get('quinquenio').value);
  }

  get apostilamento(): number {
    return this.zeroIfEmpty(this.form.get('apostilamento').value);
  }

  get adcNoturno(): number {
    return this.zeroIfEmpty(this.form.get('adcNoturno').value);
  }

  get insalubridade(): number {
    return this.zeroIfEmpty(this.form.get('insalubridade').value);
  }

  get periculosidade(): number {
    return this.zeroIfEmpty(this.form.get('periculosidade').value);
  }


  //Subtraidos

  get inss(): number {
    return this.zeroIfEmpty(this.formSubtraidos.get('inss').value);
  }
  get previdencia(): number {
    return this.zeroIfEmpty(this.formSubtraidos.get('previdencia').value);
  }

  get IRRF(): number {
    return this.zeroIfEmpty(this.formSubtraidos.get('IRRF').value);
  }

  get pensao() {
    return this.zeroIfEmpty(this.formSubtraidos.get('pensao').value);
  }

  get valeTransporte(): number {
    return this.zeroIfEmpty(this.formSubtraidos.get('valeTransporte').value);
  }


  get planoSaude(): number {
    return this.zeroIfEmpty(this.formSubtraidos.get('planoSaude').value);
  }


  ngOnInit() {}


  zeroIfEmpty(value: number): number {
    if (!value) {
      return 0.0;
    } else {
      return value;
    }
  }
  calcular() {
    console.log(this.salarioBase);
    this.salarioBruto = this.salarioBase + this.quinquenio +
      this.apostilamento + this.adcNoturno + this.insalubridade + this.periculosidade;
  }

  calcularSubtraidos() {
    this.totalSubtraidos = (this.inss + this.previdencia +
      this.IRRF + this.pensao + this.valeTransporte + this.planoSaude);
  }

  calculaTotal() {
    this.outrasDespesas = this.outrosEmprestimos + this.despesasPlanoSaude + this.outrasMensalidades + this.convenios;
    this.totalMargem = 0.3 * (this.salarioBruto - this.totalSubtraidos) - this.outrasDespesas;
  }
}
