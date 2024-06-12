import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsersService } from '../../../services/users.service';
import { User } from '../../../interface/user';

@Component({
  selector: 'app-modal-form-user',
  templateUrl: './modal-form-user.component.html',
  styleUrl: './modal-form-user.component.scss'
})
export class ModalFormUserComponent {
  healthPlan = [
    {
      id: 1,
      description: 'Plano 300 Enfermaria',
    },
    {
      id: 2,
      description: 'Plano 400 Enfermaria',
    },
    {
      id: 1,
      description: 'Plano 500 Plus',
    },
  ]
  dentalPlan = [
    {
      id: 1,
      description: 'Plano Basic',
    },
    {
      id: 2,
      description: 'Plano Medium',
    },
    {
      id: 1,
      description: 'Plano Plus',
    },
  ]
  formUser: FormGroup;
  editUser: boolean = false

  constructor(
    public dialogRef: MatDialogRef<ModalFormUserComponent>,
    private formBuilder: FormBuilder,
    private userService: UsersService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.buildForm();
    if (this.data && this.data.name) {
      this.editUser = true;
    }
  }

  saveUser() {
    const objectUserForm: User = this.formUser.getRawValue();

    if (this.data && this.data.name) {
      this.userService.update(this.data.firebaseId, objectUserForm).then(
        (response: any) => {
          window.alert('Usuário editado com sucesso!');
          this.closeModal();
        }
      ).catch(err => {
        window.alert('Houve um erro ao salvar o usuário')
        console.error(err)
      })
    }
    else {
      //salvar usuário
      this.userService.addUser(objectUserForm).then(
        (response: any) => {
          window.alert('Usuário criado com sucesso!');
          this.closeModal();
        }
      ).catch(err => {
        window.alert('Houve um erro ao salvar o usuário')
        console.error(err)
      })
    }
  }

  buildForm() {
    this.formUser = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      sector: [null, [Validators.required, Validators.minLength(2)]],
      role: [null, [Validators.required, Validators.minLength(3)]],
      healthPlan: [''],
      dentalPlan: [''],
    });

    if (this.data && this.data.name) {
      this.fillForm()
    }
  }

  // preencher formulário para edição
  fillForm() {
    this.formUser.patchValue({
      name: this.data.name,
      email: this.data.email,
      sector: this.data.sector,
      role: this.data.role,
      healthPlan: this.data.healthPlan,
      dentalPlan: this.data.dentalPlan
    })
  }

  closeModal() {
    this.dialogRef.close();
  }


}
