export default function RestoreReport() {
    function restoreSession() {
        const currentSession = JSON.parse(localStorage.get("companyData"));
        const prevSession = JSON.parse(localStorage.get("prevCompanyData"));
        const sessionRestoration = confirm(
            `¿Está seguro de que desea restaurar la sesión anterior de la empresa ${prevSession.nombre}?\nSu actual sesión será guardada (sin fotografías) y se cargará la anterior.`,
        );

        if (sessionRestoration) {
        }
    }

    return (
        <div>
            <button
                className="button button--back button--floating button--floating--restore"
                onClick={restoreSession}
            >
                Restaurar Sesión Anterior
            </button>
        </div>
    );
}
