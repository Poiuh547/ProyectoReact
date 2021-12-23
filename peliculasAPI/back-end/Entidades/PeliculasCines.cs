using PeliculasAPI.Entidades;
using System.ComponentModel.DataAnnotations;

namespace PeliculasAPI.DTOs
{
    public class PeliculasCines
    {
        public int PeliculaId { get; set; }
        public int CineId { get; set; }
        public Pelicula Pelicula { get; set; }
        public Cine Cine { get; set; }  

    }
}
