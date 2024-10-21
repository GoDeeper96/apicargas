// models/Venta.js
import mongoose from 'mongoose';
const esquemaVentas = new mongoose.Schema({
    Periodo: {
      type: String,
      required: false,
      index: true
    },
    CodSupervisor: {
      type: String,
      required: false,
      index: true
    },
    NroDocSupervisor: {
      type: String,
      required: false,
      index: true
    },
    VendedorCodigo: {
      type: String,
      required: false,
      index: true
    },
    ValorVenta: {
      type: Number,
      required: false,
      index: true
    },
    CantidadUnitaria: {
      type: Number,
      required: false,
      index: true
    },
    NomVen: {
      type: String,
      required: false,
      index: true
    },
    Sucursal: {
      type: String,
      required: false,
      index: true
    },
    Nombre: {
      type: String,
      required: false,
      index: true
    },
    ClienteCodigo: {
      type: String,
      required: false,
      index: true
    },
    FuerzaVentas: {
      type: String,
      required: false,
      index: true
    },
    ProductoDescripcion: {
      type: String,
      required: false,
      index: true
    },
    Fecha: {
      type: Date,
      required: false,
      index: true
    },
    Marca: {
      type: String,
      required: false,
      index: true
    },
    Proveedor: {
      type: String,
      required: false,
      index: true
    },
    GrupoVentas: {
      type: String,
      required: false,
      index: true
    },
    IDCaracteristica4: {
      type: String,
      required: false,
      index: true
    },
    SubProveedor: {
      type: String,
      required: false,
      index: true
    },
    ProductoCodigo: {
      type: String,
      required: false,
      index: true
    },
    EsBonificacion: {
      type: String,
      required: false,
      index: true
    },
    linea: {
      type: String,
      required: false,
      index: true
    },
    PKIDProveedor: {
      type: Number,
      required: false,
      index: true
    },
    Pedido: {
      type: String,
      required: false,
      index: true
    },
    Canal: {
      type: String,
      required: false,
      index: true
    },
    Distrito: {
      type: String,
      required: false,
      index: true
    },
    EAN13: {
      type: String,
      required: false,
      index: true
    },
    CodigoFabrica: {
      type: String,
      required: false,
      index: true
    },
    JefeVentas: {
      type: String,
      required: false,
      index: true
    },
    FactorConversion: {
      type: Number,
      required: false,
      index: true
    },
    Cajas: {
      type: Number,
      required: false,
      index: true
    },
    Anio: {
      type: Number,
      required: false,
      index: true
    },
    Mes: {
      type: String,
      required: false,
      index: true
    },
    BloqueNegocio: {
      type: String,
      required: false,
      index: true
    },
    Bloque: {
      type: String,
      required: false,
      index: true
    },
    Zona: {
      type: String,
      required: false,
      index: true
    },
    EstadoCliente: {
      type: String,
      required: false,
      index: true
    },
    GiroCliente: {
      type: String,
      required: false,
      index: true
    },
    ClienteNombre: {
      type: String,
      required: false,
      index: true
    },
    TipoVentas: {
      type: String,
      required: false,
      index: true
    },
    Factor: {
      type: Number,
      required: false,
      index: true
    },
    NumPedido: {
      type: Number,
      required: false,
      index: true
    }
  }
  ,
  {
    collection:'b2b_version'
  }
);
// const b2bventas2Model = mongoose.models['b2b_version'] 
// ? mongoose.model('b2b_version') 
// : mongoose.model('b2b_version', esquemaVentas);
export default mongoose.model('b2b',esquemaVentas)
// export default b2bventas2Model
// export default b2bventas2Model