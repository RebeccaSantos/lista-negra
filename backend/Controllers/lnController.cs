using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
namespace backend.Controllers
{
    [ApiController]
     [Route("[controller]")]
    public class lncontroller:ControllerBase
    {
         bussines.listanegrabussines business = new bussines.listanegrabussines();
        utils.conversorlistanegra conversor = new utils.conversorlistanegra();


        [HttpPost]
        public ActionResult<Models.response.listanegraresponse> Inserir(Models.request.listanegrarequest request)
        {
            try
            {
                Models.TbListaNegra ln = conversor.paramodelotabela(request);
                business.Inserir(ln);

                Models.response.listanegraresponse resp = conversor.paramodeloresponse(ln);
                return resp;
            }
            catch (System.Exception ex)
            {
                return BadRequest(
                    new Models.response.erroresponse(404, ex.Message)
                );
            }
        }


        [HttpGet]
        public ActionResult<List<Models.response.listanegraresponse>> Listar() 
        {
            try
            {
                List<Models.TbListaNegra> lns = business.Listar();
                if (lns.Count == 0)
                    return NotFound();

                List<Models.response.listanegraresponse> resp = lns.Select(x=>conversor.paramodeloresponse(x)).ToList();
                return resp;
            }
            catch (Exception ex)
            {
                return StatusCode(
                500, ex.Message
                );
            }
        }
        [HttpPut("{id}")]
        public ActionResult<Models.response.listanegraresponse> Alterar(int id,Models.request.listanegrarequest req)
        {
            try
            {
                Models.TbListaNegra atual = business.ConsultarPorId(id);
                if(atual == null)
                    return NotFound();
                Models.TbListaNegra novo = conversor.paramodelotabela(req);
                atual = business.Alterar(atual, novo);
                Models.response.listanegraresponse resp = conversor.paramodeloresponse(atual);
                return resp;
            }
            catch (System.Exception e)
            {
                return BadRequest(
                    new Models.response.erroresponse( 400,e.Message)
                );
            }
        }
        [HttpDelete("{id}")]
        public ActionResult<Models.response.listanegraresponse> Deletar(int id)
        {
             try
            {
                Models.TbListaNegra tab = business.ConsultarPorId(id);
                if(tab == null)
                    return NotFound();

                tab = business.Deletar(tab);
                Models.response.listanegraresponse resp = conversor.paramodeloresponse(tab);
                return resp;
            }
            catch (System.Exception e)
            {
                return BadRequest(
                    new Models.response.erroresponse( 400,e.Message)
                );
            }
        }
 
    }
}