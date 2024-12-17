<%@ WebHandler Language="C#" Class="api" %>

using System;
using System.Web;
using System.Linq;
using System.IO;

public class api : IHttpHandler {
    string apiid;
    public void ProcessRequest (HttpContext context) {
        string imageNmae = null;
        var httpRequest = HttpContext.Current.Request;

        var postedFile = httpRequest.Files["Image"];
        
        apiid = httpRequest.Params["apiid"];

        if (postedFile != null)
        {
            if (apiid == "foodster")
            {
                imageNmae = new String(Path.GetFileNameWithoutExtension(postedFile.FileName).ToArray());
                imageNmae = imageNmae + Path.GetExtension(postedFile.FileName);
                var filepath = HttpContext.Current.Server.MapPath("~/assets/foodster/images" + imageNmae);
                postedFile.SaveAs(filepath);
            }
        }
    }
    public bool IsReusable {
        get {
            return false;
        }
    }

}