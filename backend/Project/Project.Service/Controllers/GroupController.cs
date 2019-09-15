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
    public class GroupController : ControllerBase
    {
        private readonly AppDbContext _db;
        public GroupController(AppDbContext db) => _db = db;

        // GET api/groups/list?page=1&count=10
        [HttpGet]
        public async Task<List<Groups>> List(int page = 1, int count = 10)
        {
            return await _db.Groups.AsNoTracking().ToListAsync();
        }

        // POST api/groups/post
        [HttpPost]
        public async Task<int> Post([FromBody] Groups postData)
        {
            try
            {
                _db.Groups.Add(postData);
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