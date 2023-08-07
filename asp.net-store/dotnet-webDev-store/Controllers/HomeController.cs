using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;

namespace dotnet_webDev_store.Controllers;

public class HomeController : Controller
{

    public IActionResult Index()
    {
        return View();
    }
}
