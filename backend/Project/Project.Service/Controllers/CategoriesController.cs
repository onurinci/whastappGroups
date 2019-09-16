using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Project.Service.Entities;

namespace Project.Service.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly AppDbContext _db;
        public CategoriesController(AppDbContext db) => _db = db;

        // GET api/categories/list?page=1&count=10
        [HttpGet]
        public async Task<List<Categories>> List(int page = 1, int count = 10)
        {
            return await _db.Categories.AsNoTracking().ToListAsync();
        }

        // GET api/categories/listIncGroups?count=5
        [HttpGet]
        public async Task<List<Categories>> ListIncGroups(int count = 10)
        {
            // ? take
            var data = await _db.Categories.Include("Groups").ToListAsync();
            return data;
        }

        // POST api/categories/add
        [HttpPost]
        public async Task<int> Add([FromBody] Categories postData)
        {
            try
            {
                _db.Categories.Add(postData);
                await _db.SaveChangesAsync();
                return 1;
            }
            catch
            {
                return -1;
            }
        }
    }
}