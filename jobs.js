import mongoose from "mongoose"
import { InitClientRedisOther } from "./initRedis.js"
import b2bventas2Model from "./models/b2bventas2.model.js"

export const addMasters = async()=>{
    const initRedis = await InitClientRedisOther().connect()
    //EJEMPLO
     // EJEMPLO
  const eliminar_periodo = await initRedis.del('Periodo');
  const distinct_Periodo = await b2bventas2Model.distinct('Periodo');
  const addweit = await initRedis.set('Periodo', JSON.stringify(distinct_Periodo));
  console.log('TERMINO Periodo');

  // Sucursal
  const eliminar_sucursal = await initRedis.del('Sucursal');
  const distinct_Sucursal = await b2bventas2Model.distinct('Sucursal');
  const addweit2 = await initRedis.set('Sucursal', JSON.stringify(distinct_Sucursal));
  console.log('TERMINO Sucursal');

  // CodSupervisor
  const eliminar_CodSupervisor = await initRedis.del('CodSupervisor');
  const distinct_CodSupervisor = await b2bventas2Model.distinct('CodSupervisor');
  const addweit3 = await initRedis.set('CodSupervisor', JSON.stringify(distinct_CodSupervisor));
  console.log('TERMINO CodSupervisor');

  // NroDocSupervisor
  const eliminar_NroDocSupervisor = await initRedis.del('NroDocSupervisor');
  const distinct_NroDocSupervisor = await b2bventas2Model.distinct('NroDocSupervisor');
  const addweit4 = await initRedis.set('NroDocSupervisor', JSON.stringify(distinct_NroDocSupervisor));
  console.log('TERMINO NroDocSupervisor');

  // VendedorCodigo
  const eliminar_VendedorCodigo = await initRedis.del('VendedorCodigo');
  const distinct_VendedorCodigo = await b2bventas2Model.distinct('VendedorCodigo');
  const addweit5 = await initRedis.set('VendedorCodigo', JSON.stringify(distinct_VendedorCodigo));
  console.log('TERMINO VendedorCodigo');

  // NomVen
  const eliminar_NomVen = await initRedis.del('NomVen');
  const distinct_NomVen = await b2bventas2Model.distinct('NomVen');
  const addweit6 = await initRedis.set('NomVen', JSON.stringify(distinct_NomVen));
  console.log('TERMINO NomVen');

  // Nombre
  const eliminar_Nombre = await initRedis.del('Nombre');
  const distinct_Nombre = await b2bventas2Model.distinct('Nombre');
  const addweit7 = await initRedis.set('Nombre', JSON.stringify(distinct_Nombre));
  console.log('TERMINO Nombre');

  // ClienteCodigo
  const eliminar_ClienteCodigo = await initRedis.del('ClienteCodigo');
  const distinct_ClienteCodigo = await b2bventas2Model.distinct('ClienteCodigo');
  const addweit8 = await initRedis.set('ClienteCodigo', JSON.stringify(distinct_ClienteCodigo));
  console.log('TERMINO ClienteCodigo');

  // FuerzaVentas
  const eliminar_FuerzaVentas = await initRedis.del('FuerzaVentas');
  const distinct_FuerzaVentas = await b2bventas2Model.distinct('FuerzaVentas');
  const addweit9 = await initRedis.set('FuerzaVentas', JSON.stringify(distinct_FuerzaVentas));
  console.log('TERMINO FuerzaVentas');

  // ProductoDescripcion
  const eliminar_ProductoDescripcion = await initRedis.del('ProductoDescripcion');
  const distinct_ProductoDescripcion = await b2bventas2Model.distinct('ProductoDescripcion');
  const addweit10 = await initRedis.set('ProductoDescripcion', JSON.stringify(distinct_ProductoDescripcion));
  console.log('TERMINO ProductoDescripcion');

  // Marca
  const eliminar_Marca = await initRedis.del('Marca');
  const distinct_Marca = await b2bventas2Model.distinct('Marca');
  const addweit11 = await initRedis.set('Marca', JSON.stringify(distinct_Marca));
  console.log('TERMINO Marca');

  // Proveedor
  const eliminar_Proveedor = await initRedis.del('Proveedor');
  const distinct_Proveedor = await b2bventas2Model.distinct('Proveedor');
  const addweit12 = await initRedis.set('Proveedor', JSON.stringify(distinct_Proveedor));
  console.log('TERMINO Proveedor');

  // GrupoVentas
  const eliminar_GrupoVentas = await initRedis.del('GrupoVentas');
  const distinct_GrupoVentas = await b2bventas2Model.distinct('GrupoVentas');
  const addweit13 = await initRedis.set('GrupoVentas', JSON.stringify(distinct_GrupoVentas));
  console.log('TERMINO GrupoVentas');

  // IDCaracteristica4
  const eliminar_IDCaracteristica4 = await initRedis.del('IDCaracteristica4');
  const distinct_IDCaracteristica4 = await b2bventas2Model.distinct('IDCaracteristica4');
  const addweit14 = await initRedis.set('IDCaracteristica4', JSON.stringify(distinct_IDCaracteristica4));
  console.log('TERMINO IDCaracteristica4');

  // SubProveedor
  const eliminar_SubProveedor = await initRedis.del('SubProveedor');
  const distinct_SubProveedor = await b2bventas2Model.distinct('SubProveedor');
  const addweit15 = await initRedis.set('SubProveedor', JSON.stringify(distinct_SubProveedor));
  console.log('TERMINO SubProveedor');

  // ProductoCodigo
  const eliminar_ProductoCodigo = await initRedis.del('ProductoCodigo');
  const distinct_ProductoCodigo = await b2bventas2Model.distinct('ProductoCodigo');
  const addweit16 = await initRedis.set('ProductoCodigo', JSON.stringify(distinct_ProductoCodigo));
  console.log('TERMINO ProductoCodigo');

  // Línea
  const eliminar_linea = await initRedis.del('linea');
  const distinct_linea = await b2bventas2Model.distinct('linea');
  const addweit18 = await initRedis.set('linea', JSON.stringify(distinct_linea));
  console.log('TERMINO linea');

  // PKIDProveedor
  const eliminar_PKIDProveedor = await initRedis.del('PKIDProveedor');
  const distinct_PKIDProveedor = await b2bventas2Model.distinct('PKIDProveedor');
  const addweit19 = await initRedis.set('PKIDProveedor', JSON.stringify(distinct_PKIDProveedor));
  console.log('TERMINO PKIDProveedor');

  // Pedido ES MUCHO
//   const eliminar_Pedido = await initRedis.del('Pedido');
//   const distinct_Pedido = await b2bventas2Model.distinct('Pedido');
//   const addweit20 = await initRedis.set('Pedido', JSON.stringify(distinct_Pedido));
//   console.log('TERMINO Pedido');

  // Canal
  const eliminar_Canal = await initRedis.del('Canal');
  const distinct_Canal = await b2bventas2Model.distinct('Canal');
  const addweit21 = await initRedis.set('Canal', JSON.stringify(distinct_Canal));
  console.log('TERMINO Canal');

  // Distrito
  const eliminar_Distrito = await initRedis.del('Distrito');
  const distinct_Distrito = await b2bventas2Model.distinct('Distrito');
  const addweit22 = await initRedis.set('Distrito', JSON.stringify(distinct_Distrito));
  console.log('TERMINO Distrito');

  // EAN13
  const eliminar_EAN13 = await initRedis.del('EAN13');
  const distinct_EAN13 = await b2bventas2Model.distinct('EAN13');
  const addweit23 = await initRedis.set('EAN13', JSON.stringify(distinct_EAN13));
  console.log('TERMINO EAN13');

  // CodigoFabrica
  const eliminar_CodigoFabrica = await initRedis.del('CodigoFabrica');
  const distinct_CodigoFabrica = await b2bventas2Model.distinct('CodigoFabrica');
  const addweit24 = await initRedis.set('CodigoFabrica', JSON.stringify(distinct_CodigoFabrica));
  console.log('TERMINO CodigoFabrica');

  // JefeVentas
  const eliminar_JefeVentas = await initRedis.del('JefeVentas');
  const distinct_JefeVentas = await b2bventas2Model.distinct('JefeVentas');
  const addweit25 = await initRedis.set('JefeVentas', JSON.stringify(distinct_JefeVentas));
  console.log('TERMINO JefeVentas');

  // Anio
  const eliminar_Anio = await initRedis.del('Anio');
  const distinct_Anio = await b2bventas2Model.distinct('Anio');
  const addweit26 = await initRedis.set('Anio', JSON.stringify(distinct_Anio));
  console.log('TERMINO Anio');

  // Mes
  const eliminar_Mes = await initRedis.del('Mes');
  const distinct_Mes = await b2bventas2Model.distinct('Mes');
  const addweit27 = await initRedis.set('Mes', JSON.stringify(distinct_Mes));
  console.log('TERMINO Mes');

  // BloqueNegocio
  const eliminar_BloqueNegocio = await initRedis.del('BloqueNegocio');
  const distinct_BloqueNegocio = await b2bventas2Model.distinct('BloqueNegocio');
  const addweit28 = await initRedis.set('BloqueNegocio', JSON.stringify(distinct_BloqueNegocio));
  console.log('TERMINO BloqueNegocio');

  // Bloque
  const eliminar_Bloque = await initRedis.del('Bloque');
  const distinct_Bloque = await b2bventas2Model.distinct('Bloque');
  const addweit29 = await initRedis.set('Bloque', JSON.stringify(distinct_Bloque));
  console.log('TERMINO Bloque');

  // Zona
  const eliminar_Zona = await initRedis.del('Zona');
  const distinct_Zona = await b2bventas2Model.distinct('Zona');
  const addweit30 = await initRedis.set('Zona', JSON.stringify(distinct_Zona));
  console.log('TERMINO Zona');


    // EstadoCliente
    const eliminar_EstadoCliente = await initRedis.del('EstadoCliente');
    const distinct_EstadoCliente = await b2bventas2Model.distinct('EstadoCliente');
    const addweit31 = await initRedis.set('EstadoCliente', JSON.stringify(distinct_Zona));
    console.log('TERMINO EstadoCliente');

      // GiroCliente
      const eliminar_GiroCliente = await initRedis.del('GiroCliente');
      const distinct_GiroCliente = await b2bventas2Model.distinct('GiroCliente');
      const addweit32 = await initRedis.set('GiroCliente', JSON.stringify(distinct_Zona));
      console.log('TERMINO GiroCliente');
    
    
    // ClienteNombre
    const eliminar_ClienteNombre= await initRedis.del('ClienteNombre');
    const distinct_ClienteNombre = await b2bventas2Model.distinct('ClienteNombre');
    const addweit33 = await initRedis.set('ClienteNombre', JSON.stringify(distinct_Zona));
    console.log('TERMINO ClienteNombre');

    // TipoVentas
    const eliminar_TipoVentas= await initRedis.del('TipoVentas');
    const distinct_TipoVentas = await b2bventas2Model.distinct('TipoVentas');
    const addweit34 = await initRedis.set('TipoVentas', JSON.stringify(distinct_Zona));
    console.log('TERMINO TipoVentas');

    // NumPedido
    const eliminar_NumPedido= await initRedis.del('NumPedido');
    const distinct_NumPedido = await b2bventas2Model.distinct('NumPedido');
    const addweit35 = await initRedis.set('NumPedido', JSON.stringify(distinct_Zona));
    console.log('TERMINO NumPedido');
  // Canal01
//   const eliminar_Canal = await initRedis.del('Canal');
//   const distinct_Canal = await b2bventas2Model.distinct('Canal');
//   const addweit31 = await initRedis.set('Canal', JSON.stringify(distinct_Canal));
//   console.log('TERMINO Canal');
    // const eliminar_periodo = await initRedis.del('Periodo')
    // const distinct_Periodo = await b2bventas2Model.distinct('Periodo')
    // const addweit = await initRedis.set('Periodo',JSON.stringify(distinct_Periodo))


    // const distinct_Sucursal = await b2bventas2Model.distinct('Sucursal')
    // const distinct_CodSupervisor = await b2bventas2Model.distinct('CodSupervisor')
    // const NroDocSupervisor = await b2bventas2Model.distinct('NroDocSupervisor')
    // const VendedorCodigo = await b2bventas2Model.distinct('VendedorCodigo')
    // const NomVen = await b2bventas2Model.distinct('NomVen')
    // const Nombre = await b2bventas2Model.distinct('Nombre')
    // const ClienteCodigo = await b2bventas2Model.distinct('ClienteCodigo')
    // const FuerzaVentas = await b2bventas2Model.distinct('FuerzaVentas')
    // const ProductoDescripcion = await b2bventas2Model.distinct('ProductoDescripcion')
    // const Marca = await b2bventas2Model.distinct('Marca')
    // const Proveedor = await b2bventas2Model.distinct('Proveedor')
    // const GrupoVentas = await b2bventas2Model.distinct('GrupoVentas')
    // const IDCaracteristica4 = await b2bventas2Model.distinct('IDCaracteristica4')
    // const SubProveedor = await b2bventas2Model.distinct('SubProveedor')
    // const ProductoCodigo = await b2bventas2Model.distinct('ProductoCodigo')
    // // const EsBonificacion = await b2bventas2Model.distinct('EsBonificacion') //NO ES MUTABLE
    // const linea = await b2bventas2Model.distinct('linea')
    // const PKIDProveedor = await b2bventas2Model.distinct('PKIDProveedor')
    // const Pedido = await b2bventas2Model.distinct('Pedido')
    // const Canal = await b2bventas2Model.distinct('Canal')
    // const Distrito = await b2bventas2Model.distinct('Distrito')
    // const EAN13 = await b2bventas2Model.distinct('EAN13')
    // const CodigoFabrica = await b2bventas2Model.distinct('CodigoFabrica')
    // const JefeVentas = await b2bventas2Model.distinct('JefeVentas')
    // const Anio = await b2bventas2Model.distinct('Anio')
    // const Mes = await b2bventas2Model.distinct('Mes')
    // const BloqueNegocio = await b2bventas2Model.distinct('BloqueNegocio')
    // const Bloque = await b2bventas2Model.distinct('Bloque')
    // const Zona = await b2bventas2Model.distinct('Zona')
    // const EstadoCliente = await b2bventas2Model.distinct('EstadoCliente')
    // const GiroCliente = await b2bventas2Model.distinct('GiroCliente')
    // const ClienteNombre = await b2bventas2Model.distinct('ClienteNombre')
    // const TipoVentas = await b2bventas2Model.distinct('TipoVentas')
    // const NumPedido = await b2bventas2Model.distinct('NumPedido')



   
    // const addweit2 = await initRedis.set('Sucursal',JSON.stringify(distinct_Sucursal))
    // const addweit3 = await initRedis.set('CodSupervisor',JSON.stringify(distinct_CodSupervisor))
    // const addweit4 = await initRedis.set('NroDocSupervisor',JSON.stringify(NroDocSupervisor))
    // const addweit5 = await initRedis.set('VendedorCodigo',JSON.stringify(VendedorCodigo))
    // const addweit6 = await initRedis.set('NomVen',JSON.stringify(NomVen))
    // const addweit7 = await initRedis.set('Nombre',JSON.stringify(Nombre))
    // const addweit8 = await initRedis.set('ClienteCodigo',JSON.stringify(ClienteCodigo))
    // const addweit9 = await initRedis.set('FuerzaVentas',JSON.stringify(FuerzaVentas))
    // const addweit10 = await initRedis.set('ProductoDescripcion',JSON.stringify(ProductoDescripcion))
    // const addweit11 = await initRedis.set('Marca',JSON.stringify(Marca))
    // const addweit12 = await initRedis.set('Proveedor',JSON.stringify(Proveedor))
    // const addweit13 = await initRedis.set('GrupoVentas',JSON.stringify(GrupoVentas))
    // const addweit14 = await initRedis.set('IDCaracteristica4',JSON.stringify(IDCaracteristica4))
    // const addweit15 = await initRedis.set('SubProveedor',JSON.stringify(SubProveedor))
    // const addweit16 = await initRedis.set('ProductoCodigo',JSON.stringify(ProductoCodigo))

    // const addweit18 = await initRedis.set('linea',JSON.stringify(linea))
    // const addweit19 = await initRedis.set('PKIDProveedor',JSON.stringify(PKIDProveedor))
    // const addweit20 = await initRedis.set('Pedido',JSON.stringify(Pedido))
    // const addweit21 = await initRedis.set('Canal',JSON.stringify(Canal))
    // const addweit22 = await initRedis.set('Distrito',JSON.stringify(Distrito))
    // const addweit23 = await initRedis.set('EAN13',JSON.stringify(EAN13))
    // const addweit24 = await initRedis.set('CodigoFabrica',JSON.stringify(CodigoFabrica))
    // const addweit25 = await initRedis.set('JefeVentas',JSON.stringify(JefeVentas))
    // const addweit26 = await initRedis.set('Anio',JSON.stringify(Anio))
    // const addweit27 = await initRedis.set('Mes',JSON.stringify(Mes))
    // const addweit28 = await initRedis.set('BloqueNegocio',JSON.stringify(BloqueNegocio))
    // const addweit29 = await initRedis.set('Bloque',JSON.stringify(Bloque))
    // const addweit30 = await initRedis.set('Zona',JSON.stringify(Zona))
    // const addweit31 = await initRedis.set('EstadoCliente',JSON.stringify(EstadoCliente))
    // const addweit32 = await initRedis.set('GiroCliente',JSON.stringify(GiroCliente))
    // const addweit33 = await initRedis.set('ClienteNombre',JSON.stringify(ClienteNombre))
    // const addweit34 = await initRedis.set('TipoVentas',JSON.stringify(TipoVentas))
    // const addweit35 = await initRedis.set('NumPedido',JSON.stringify(NumPedido))



    // console.log(distinct)

}