export function AuthLeft() {
    return (
        <>
            <div>
                <h5 className="text-xs font-bold mb-2 uppercase tracking-wide text-muted-foreground">
                    Decisiones Arquitectónicas
                </h5>
                <p className="text-muted-foreground text-sm leading-relaxed">
                    Microservicio diseñado con Arquitectura Hexagonal para
                    desacoplar la lógica core de los adaptadores OIDC y drivers
                    de base de datos.
                </p>
            </div>
            <div>
                <h5 className="text-xs font-bold mb-2 uppercase tracking-wide text-muted-foreground">
                    Modelo de Base de Datos
                </h5>
                <p className="text-muted-foreground text-sm leading-relaxed">
                    Tablas de Rol/Permiso auto-referenciales con consultas
                    recursivas para resolución granular de ACL.
                </p>
            </div>
        </>
    );
}
