import React, { Fragment, useState } from 'react';
import Alerta from './Alerta';

const FormularioGastos = () => {
	const [nombre, setGasto] = useState('');
	const [cantidad, setCantidad] = useState(0);
	const [errorEnGasto, setErrorEnGasto] = useState(false);

	const agregarGasto = (e) => {
		e.preventDefault();

		if (nombre === '' || cantidad < 1 || isNaN(cantidad)) {
			setErrorEnGasto(true);
			return;
		}

		// TODO Agregar gasto a la lista
	};

	const onChanged = (e) => {
		if (e.target.name === 'cantidad') {
			setCantidad(parseInt(e.target.value));
		} else {
			setGasto(e.target.value);
		}
	};

	return (
		<Fragment>
			<h3 className="mb-5">Agrega tus gastos</h3>

			{errorEnGasto ? (
				<div className="my-4">
				<Alerta
					texto='El gasto ingresado no parece correcto. Verifique los campos'
					tipo='danger'
				/>
				</div>
			) : null}

			<form onSubmit={agregarGasto}>
				<div className='mb-3'>
					<label className='form-label'>Nombre Gasto</label>
					<input
						type='text'
						className='form-control'
						onChange={onChanged}
						value={nombre}
						name='nombre'
						placeholder='Ej. Transporte'
					/>
				</div>

				<div className='mb-3'>
					<label className='form-label'>Cantidad Gasto</label>
					<input
						type='number'
						className='form-control'
						onChange={onChanged}
						value={cantidad}
						name='cantidad'
						placeholder='Ej. 300'
					/>
				</div>

				<button type='submit' className='btn btn-primary btn-lg btn-block'>
					Agregar Gasto
				</button>
			</form>
		</Fragment>
	);
};

export default FormularioGastos;
