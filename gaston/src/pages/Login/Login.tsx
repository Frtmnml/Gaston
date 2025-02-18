import React from 'react';
import './Login.css';

export const LoginPage = () => {
    return (
        <form>
            <div>
                <input
                    type="text"
                    placeholder="Correo"
                />
            </div>
            <div>
                <input
                    type="password"
                    placeholder="Contraseña"
                />
            </div>
            <div>
                <div>
                    <div>¿Has olvidado tu contraseña?</div>
                </div>
            </div>

            <div>
                <input
                    type="submit"
                    value="Acceder"
                />
            </div>
        </form>
    )
}