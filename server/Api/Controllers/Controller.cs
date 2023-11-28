using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TransportController : ControllerBase
    {
        private readonly Service _service;

        public TransportController(Service service)
        {
            _service = service;
        }

        [HttpPost("calculate-profitability")]
        public ActionResult<Result> CalculateProfitability([FromBody] Input input)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            var result = _service.CalculateProfitability(input);
            return Ok(result);
        }
    }
}