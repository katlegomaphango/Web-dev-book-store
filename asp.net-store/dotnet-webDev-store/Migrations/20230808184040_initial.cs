using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace dotnet_webDev_store.Migrations
{
    /// <inheritdoc />
    public partial class initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Books",
                columns: table => new
                {
                    bookID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BookTitle = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Author = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Price = table.Column<decimal>(type: "decimal(5,2)", nullable: false),
                    Rating = table.Column<int>(type: "int", nullable: false),
                    DateAdded = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Books", x => x.bookID);
                });

            migrationBuilder.InsertData(
                table: "Books",
                columns: new[] { "bookID", "Author", "BookTitle", "DateAdded", "Description", "Price", "Rating" },
                values: new object[,]
                {
                    { 1, "Valerio De Sanctis", "ASP.NET Core 3 and Angular 9", new DateTime(2020, 2, 14, 0, 0, 0, 0, DateTimeKind.Unspecified), "Learning full stack development calls for knowledge of both frontend and backend web development. By covering the impressive capabilities of ASP.NET Core 3.1 and Angular 9, right from project setup through to the deployment phase, this book will help you to develop your skills effectively.", 265.99m, 5 },
                    { 2, "Mircea Teodor Oprea", "Full-stack ASP.NET Core: Build full-stack web applications", new DateTime(2020, 2, 15, 0, 0, 0, 0, DateTimeKind.Unspecified), "Learn how to build full-stack web applications using the latest ASP.NET Core technologies. The book follows the development of a real-life small project, so you are sure to have a fully functional project by the end.", 50.00m, 1 },
                    { 3, "Mark J. Price", "C# 8.0 and .NET Core 3.0 - Modern Cross-Platform Development", new DateTime(2019, 10, 31, 0, 0, 0, 0, DateTimeKind.Unspecified), "In C# 8.0 and .NET Core 3.0 – Modern Cross-Platform Development, Fourth Edition, expert teacher Mark J. Price gives you everything you need to start programming C# applications. This latest edition uses the popular Visual Studio Code editor to work across all major operating systems. It is fully updated and expanded with new chapters on Content Management Systems (CMS) and machine learning with ML.NET.", 195.00m, 4 },
                    { 4, "Antonio Esposito", "Reactive Programming for .NET Developers", new DateTime(2016, 7, 29, 0, 0, 0, 0, DateTimeKind.Unspecified), "Reactive programming is an innovative programming paradigm focused on time-based problem solving. It makes your programs better-performing, easier to scale, and more reliable. Want to create fast - running applications to handle complex logics and huge datasets for financial and big - data challenges? Then you have picked up the right book!", 257.50m, 2 },
                    { 5, "Sam Ruby", "Agile Web Development with Rails 6", new DateTime(2020, 2, 25, 0, 0, 0, 0, DateTimeKind.Unspecified), "Learn Rails the way the Rails core team recommends it, along with the tens of thousands of developers who have used this broad tutorial and reference. If you're new to Rails, you'll get step-by-step guidance. If you're an experienced developer, get the comprehensive information you need for the latest version of Ruby on Rails. The new edition of this award-winning classic is completely updated for Rails 6 and Ruby 2.6, with information on system testing, Webpack, and advanced JavaScript.", 538.00m, 3 },
                    { 6, "Leonard Base", "JavaScript for Beginners", new DateTime(2020, 2, 19, 0, 0, 0, 0, DateTimeKind.Unspecified), "This book provides a comprehensive description of the basic JavaScript language and brings new chapters documenting server-side jQuery and JavaScript. Recommended for programmers who want to learn web programming language and for JavaScript programmers who want to broaden their knowledge and master the language. This is the complete and definitive JavaScript programmer's guide and reference manual.", 160.00m, 5 },
                    { 7, "Max Beerbohm", "TypeScript: The Ultimate Beginners Guide", new DateTime(2020, 2, 4, 0, 0, 0, 0, DateTimeKind.Unspecified), "TypeScript is a programming language designed for large-scale JavaScript application development, it has been designed as a typed superset of JavaScript. This means we’ve actually been writing TypeScript this whole time! This language allow us to use features from the most recent ECMAScript versions and even some features that are not even in the scope of the standard.", 69.99m, 1 },
                    { 8, "Greg Sidelnikov", "Node.js API: Learn server-side JavaScript", new DateTime(2020, 2, 10, 0, 0, 0, 0, DateTimeKind.Unspecified), "Learn how to build your own vanilla Node.js server from scratch with MySQL database.", 249.00m, 3 },
                    { 9, "Frank Zammetti", "Modern Full-stack Development", new DateTime(2020, 1, 8, 0, 0, 0, 0, DateTimeKind.Unspecified), "Explore what React, Node, TypeScript, Webpack, and Docker have to offer individually, and how they all fit together in modern app development. You’ll begin by building a solid foundation of knowledge and quickly expand it by constructing two different real-world apps. ", 346.50m, 4 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Books");
        }
    }
}
