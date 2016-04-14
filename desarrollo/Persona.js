class Persona
{
    constructor(data)
    {
        this.guid = data.guid;
        this.nombreTarea = data.nombreTarea;
        this.estado = data.estado;
    }
    calculaEdad()
    {
        let fecha_actual = new Date();
        let parteFn = this.fechanacimiento.split("-");
        let fechaCompara = new Date(parteFn[0], parteFn[1], parteFn[2]); //año, mes día
        return Math.floor((fecha_actual - fechaCompara) / 1000 / 3600 / 24 / 365);
    }
    getPersona()
    {
        return [
                  this.guid,
                  this.nombreTarea,
                  this.estado
        ];
    }
}
module.exports = {Persona};
