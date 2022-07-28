import {RendimientoModel} from './rendimiento.model';
import {ProyeccionModel} from './proyeccion.model';

export class RendimientoProyeccionResModel {
  rendimiento: RendimientoModel;
  proyecciones: ProyeccionModel[];

  clear() {
    this.rendimiento = new RendimientoModel();
    this.proyecciones = [];
  }
}
