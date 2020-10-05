import React, { Fragment, useState } from 'react';
import Alerta from './Alerta';

const ColocarPresupuesto = ({
	setPresupuesto,
	setRestante,
	setMostrarIngresoPresupuesto,
}) => {
	const [presupuestoIngresado, setPresupuestoIngresado] = useState(0);
	const [errorPresupuesto, setErrorPresupuesto] = useState(false);

	const definiendoPresupuesto = (e) => setPresupuestoIngresado(parseInt(e.target.value));

	const agregarPresupuesto = (e) => {
		e.preventDefault();

		if (presupuestoIngresado < 1 || isNaN(presupuestoIngresado)) {
			setErrorPresupuesto(true);
			return;
		}

		setErrorPresupuesto(false);
		setPresupuesto(presupuestoIngresado);
		setRestante(presupuestoIngresado);
		setMostrarIngresoPresupuesto(false);
	};

	function mostrarAlerta() {
		setTimeout(() => setErrorPresupuesto(false), 4000);

		return <Alerta texto='El presupuesto ingresado es incorrecto' tipo='danger' />;
	}

	return (
		<Fragment>
			<h3 className='display-6 mb-5'>Coloca tu presupuesto</h3>

			{errorPresupuesto ? mostrarAlerta() : null}

			<form onSubmit={agregarPresupuesto}>
				<div className='mb-4'>
					<input
						type='number'
						onChange={definiendoPresupuesto}
						className='form-control form-control-lg'
						placeholder='Presupuesto'
					/>
				</div>

				<button type='submit' className='btn btn-primary btn-lg btn-block'>
					Definir Presupuesto
				</button>
			</form>
		</Fragment>
	);
};

export default ColocarPresupuesto;
