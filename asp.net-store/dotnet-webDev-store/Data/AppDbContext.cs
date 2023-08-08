using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using dotnet_webDev_store.Models;
using Microsoft.EntityFrameworkCore;

namespace dotnet_webDev_store.Data
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            :base(options)
        {

        }

        public DbSet<Book> Books { get; set; }
    }
}