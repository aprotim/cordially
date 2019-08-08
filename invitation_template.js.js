(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['invitation_template'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "            <img src=\"cid:headerImage\" width=\"100%\"/>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.greeting : stack1), depth0))
    + " ";
},"5":function(container,depth0,helpers,partials,data) {
    return " Hello ";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "                            <a href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.locationURL : stack1), depth0))
    + "\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.locationName : stack1), depth0))
    + "</a>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                            "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.locationName : stack1), depth0))
    + "\n";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ", "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.hostAddress : stack1), depth0));
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "<!doctype html>\n<html>\n  <head>\n    <meta name=\"viewport\" content=\"width=device-width\">\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <title>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.title : stack1), depth0))
    + "</title>\n    <style>\n    /* -------------------------------------\n        INLINED WITH htmlemail.io/inline\n    ------------------------------------- */\n    /* -------------------------------------\n        RESPONSIVE AND MOBILE FRIENDLY STYLES\n    ------------------------------------- */\n    @media only screen and (max-width: 620px) {\n      table[class=body] h1 {\n        font-size: 28px !important;\n        margin-bottom: 10px !important;\n      }\n      table[class=body] p,\n            table[class=body] ul,\n            table[class=body] ol,\n            table[class=body] td,\n            table[class=body] span,\n            table[class=body] a {\n        font-size: 16px !important;\n      }\n      div[class=footnote] p,\n            div[class=footnote] ul,\n            div[class=footnote] ol,\n            div[class=footnote] td,\n            div[class=footnote] span,\n            div[class=footnote] a {\n        font-size: 12px !important;\n      }\n      table[class=body] .wrapper,\n            table[class=body] .article {\n        padding: 10px !important;\n      }\n      table[class=body] .content {\n        padding: 0 !important;\n      }\n      table[class=body] .container {\n        padding: 0 !important;\n        width: 100% !important;\n      }\n      table[class=body] .main {\n        border-left-width: 0 !important;\n        border-radius: 0 !important;\n        border-right-width: 0 !important;\n      }\n      table[class=body] .btn table {\n        width: 100% !important;\n      }\n      table[class=body] .btn a {\n        width: 100% !important;\n      }\n      table[class=body] .img-responsive {\n        height: auto !important;\n        max-width: 100% !important;\n        width: auto !important;\n      }\n    }\n\n    /* -------------------------------------\n        PRESERVE THESE STYLES IN THE HEAD\n    ------------------------------------- */\n    @media all {\n      .ExternalClass {\n        width: 100%;\n      }\n      .ExternalClass,\n            .ExternalClass p,\n            .ExternalClass span,\n            .ExternalClass font,\n            .ExternalClass td,\n            .ExternalClass div {\n        line-height: 100%;\n      }\n      .apple-link a {\n        color: inherit !important;\n        font-family: inherit !important;\n        font-size: inherit !important;\n        font-weight: inherit !important;\n        line-height: inherit !important;\n        text-decoration: none !important;\n      }\n      .btn-primary table td:hover {\n        background-color: #34495e !important;\n      }\n      .btn-primary a:hover {\n        background-color: #34495e !important;\n        border-color: #34495e !important;\n      }\n    }\n    </style>\n  </head>\n  <body class=\"\" style=\"background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;\">\n    <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"body\" style=\"border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background-color: #f6f6f6;\">\n      <tr>\n        <td style=\"font-family: sans-serif; font-size: 14px; vertical-align: top;\">&nbsp;</td>\n        <td class=\"container\" style=\"font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; Margin: 0 auto; max-width: 580px; padding: 10px; width: 580px;\">\n          <div class=\"content\" style=\"box-sizing: border-box; display: block; Margin: 0 auto; max-width: 580px; padding: 10px;\">\n\n            <!-- START CENTERED WHITE CONTAINER -->\n            <span class=\"preheader\" style=\"color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;\">Join us at "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.locationName : stack1), depth0))
    + " on "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.startDate : stack1), depth0))
    + " at "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.startTime : stack1), depth0))
    + "</span>\n"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.headerImageURL : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            <table class=\"main\" style=\"border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background: #ffffff; border-radius: 3px;\">\n\n              <!-- START MAIN CONTENT AREA -->\n              <tr>\n                <td class=\"wrapper\" style=\"font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;\">\n                  <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;\">\n                    <tr>\n                      <td style=\"font-family: sans-serif; font-size: 14px; vertical-align: top;\">\n                        <p style=\"font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;\">\n                          "
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.greeting : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.guest : depth0)) != null ? stack1.name : stack1), depth0))
    + "!</p>\n                        <p style=\"font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;\">\n                          "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.message : depth0)) != null ? stack1.html : stack1), depth0)) != null ? stack1 : "")
    + "</p>\n                        <p style=\"font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;\">\n                          <b>When:</b>\n                          "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.prettyTime : stack1), depth0))
    + "\n                          <br />\n                          <b>Where:</b>\n"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.locationURL : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data})) != null ? stack1 : "")
    + "                          <br />\n                          <b>What:</b> "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.summary : stack1), depth0))
    + "\n                          <br />\n						  <a href=\""
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.gcalLink : stack1), depth0)) != null ? stack1 : "")
    + "\">[Add to Google Calendar]</a>\n                        </p>\n                        <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"btn btn-primary\" style=\"border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; box-sizing: border-box;\">\n                          <tbody>\n                            <tr>\n                              <td align=\"center\" style=\"font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 15px;\">\n                                <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: auto;\">\n                                  <tbody>\n                                    <tr>\n                                      <td style=\"font-family: sans-serif; font-size: 14px; vertical-align: top; background-color: #3498db; border-radius: 5px; text-align: center;\">\n                                        <a href='"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.guest : depth0)) != null ? stack1.rsvpUrl : stack1), depth0)) != null ? stack1 : "")
    + "' target=\"_blank\" style=\"display: inline-block; color: #ffffff; background-color: #3498db; border: solid 1px #3498db; border-radius: 5px; box-sizing: border-box; cursor: pointer; text-decoration: none; font-size: 14px; font-weight: bold; margin: 0; padding: 12px 25px; text-transform: capitalize; border-color: #3498db;\">\n                                          RSVP Now!\n                                        </a>\n                                      </td>\n                                    </tr>\n                                  </tbody>\n                                </table>\n                              </td>\n                            </tr>\n                          </tbody>\n                        </table>\n                        <div style=\"font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;\">\n                        "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.htmlDetails : stack1), depth0)) != null ? stack1 : "")
    + "\n                        </div>\n                        <p style=\"font-family: sans-serif; font-weight: normal; margin: 0; Margin-bottom: 15px; text-align: center\">\n                          <a href='"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.guest : depth0)) != null ? stack1.rsvpUrl : stack1), depth0)) != null ? stack1 : "")
    + "' target=\"_blank\" style=\"text-decoration: none; font-size: 14px; font-weight: bold;\">Click here to RSVP</a>\n                        </p>\n                        <div class=\"footnote\" style=\"font-family: sans-serif; font-size: 12px; font-weight: normal; margin: 0; Margin-bottom: 15px;\">\n                        "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.htmlFootnote : stack1), depth0)) != null ? stack1 : "")
    + "\n                        </div>\n                      </td>\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n\n            <!-- END MAIN CONTENT AREA -->\n            </table>\n\n            <!-- START FOOTER -->\n            <div class=\"footer\" style=\"clear: both; Margin-top: 10px; text-align: center; width: 100%;\">\n              <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;\">\n                <tr>\n                  <td class=\"content-block\" style=\"font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; font-size: 12px; color: #999999; text-align: center;\">\n                    <span class=\"apple-link\" style=\"color: #999999; font-size: 12px; text-align: center;\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.hostName : stack1), depth0))
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.hostAddress : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</span>\n					<br/>This email was sent via mail merge from a Google spreadsheet the sender owns. If you don't want them to invite you to their events, send them angry email.\n                  </td>\n                </tr>\n                <tr>\n                  <td class=\"content-block powered-by\" style=\"font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; font-size: 12px; color: #999999; text-align: center;\">\n                    Invitiations were sent using Cordially Invitation Manager by Aprotim Sanyal. Email based on <a href=\"http://htmlemail.io\" style=\"color: #999999; font-size: 12px; text-align: center; text-decoration: none;\">HTMLemail</a>.\n                  </td>\n                </tr>\n              </table>\n            </div>\n            <!-- END FOOTER -->\n\n          <!-- END CENTERED WHITE CONTAINER -->\n          </div>\n        </td>\n        <td style=\"font-family: sans-serif; font-size: 14px; vertical-align: top;\">&nbsp;</td>\n      </tr>\n    </table>\n  </body>\n</html>\n";
},"useData":true});
templates['plaintext_invitation_template'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.greeting : stack1), depth0)) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    return "Hello";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " (Map link: "
    + ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.locationURL : stack1), depth0)) != null ? stack1 : "")
    + ") ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.lambda;

  return ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.greeting : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = alias2(((stack1 = (depth0 != null ? depth0.guest : depth0)) != null ? stack1.name : stack1), depth0)) != null ? stack1 : "")
    + "!\n\n"
    + ((stack1 = alias2(((stack1 = (depth0 != null ? depth0.message : depth0)) != null ? stack1.text : stack1), depth0)) != null ? stack1 : "")
    + "\n\nWhen: "
    + ((stack1 = alias2(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.prettyTime : stack1), depth0)) != null ? stack1 : "")
    + "\nWhere: "
    + ((stack1 = alias2(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.locationName : stack1), depth0)) != null ? stack1 : "")
    + " "
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.locationURL : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\nWhat: "
    + ((stack1 = alias2(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.summary : stack1), depth0)) != null ? stack1 : "")
    + "\n\nRSVP Link: "
    + ((stack1 = alias2(((stack1 = (depth0 != null ? depth0.guest : depth0)) != null ? stack1.rsvpUrl : stack1), depth0)) != null ? stack1 : "")
    + "\n\n"
    + ((stack1 = alias2(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.details : stack1), depth0)) != null ? stack1 : "")
    + "\n\n"
    + ((stack1 = alias2(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.footnote : stack1), depth0)) != null ? stack1 : "");
},"useData":true});
templates['invitation_template_no_details'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "            <img src=\"cid:headerImage\" width=\"100%\"/>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.greeting : stack1), depth0))
    + " ";
},"5":function(container,depth0,helpers,partials,data) {
    return " Hello ";
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ", "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.hostAddress : stack1), depth0));
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "<!doctype html>\n<html>\n  <head>\n    <meta name=\"viewport\" content=\"width=device-width\">\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n    <title>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.title : stack1), depth0))
    + "</title>\n    <style>\n    /* -------------------------------------\n        INLINED WITH htmlemail.io/inline\n    ------------------------------------- */\n    /* -------------------------------------\n        RESPONSIVE AND MOBILE FRIENDLY STYLES\n    ------------------------------------- */\n    @media only screen and (max-width: 620px) {\n      table[class=body] h1 {\n        font-size: 28px !important;\n        margin-bottom: 10px !important;\n      }\n      table[class=body] p,\n            table[class=body] ul,\n            table[class=body] ol,\n            table[class=body] td,\n            table[class=body] span,\n            table[class=body] a {\n        font-size: 16px !important;\n      }\n      div[class=footnote] p,\n            div[class=footnote] ul,\n            div[class=footnote] ol,\n            div[class=footnote] td,\n            div[class=footnote] span,\n            div[class=footnote] a {\n        font-size: 12px !important;\n      }\n      table[class=body] .wrapper,\n            table[class=body] .article {\n        padding: 10px !important;\n      }\n      table[class=body] .content {\n        padding: 0 !important;\n      }\n      table[class=body] .container {\n        padding: 0 !important;\n        width: 100% !important;\n      }\n      table[class=body] .main {\n        border-left-width: 0 !important;\n        border-radius: 0 !important;\n        border-right-width: 0 !important;\n      }\n      table[class=body] .btn table {\n        width: 100% !important;\n      }\n      table[class=body] .btn a {\n        width: 100% !important;\n      }\n      table[class=body] .img-responsive {\n        height: auto !important;\n        max-width: 100% !important;\n        width: auto !important;\n      }\n    }\n\n    /* -------------------------------------\n        PRESERVE THESE STYLES IN THE HEAD\n    ------------------------------------- */\n    @media all {\n      .ExternalClass {\n        width: 100%;\n      }\n      .ExternalClass,\n            .ExternalClass p,\n            .ExternalClass span,\n            .ExternalClass font,\n            .ExternalClass td,\n            .ExternalClass div {\n        line-height: 100%;\n      }\n      .apple-link a {\n        color: inherit !important;\n        font-family: inherit !important;\n        font-size: inherit !important;\n        font-weight: inherit !important;\n        line-height: inherit !important;\n        text-decoration: none !important;\n      }\n      .btn-primary table td:hover {\n        background-color: #34495e !important;\n      }\n      .btn-primary a:hover {\n        background-color: #34495e !important;\n        border-color: #34495e !important;\n      }\n    }\n    </style>\n  </head>\n  <body class=\"\" style=\"background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;\">\n    <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"body\" style=\"border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background-color: #f6f6f6;\">\n      <tr>\n        <td style=\"font-family: sans-serif; font-size: 14px; vertical-align: top;\">&nbsp;</td>\n        <td class=\"container\" style=\"font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; Margin: 0 auto; max-width: 580px; padding: 10px; width: 580px;\">\n          <div class=\"content\" style=\"box-sizing: border-box; display: block; Margin: 0 auto; max-width: 580px; padding: 10px;\">\n\n            <!-- START CENTERED WHITE CONTAINER -->\n            <span class=\"preheader\" style=\"color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;\">Join us at "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.locationName : stack1), depth0))
    + " on "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.startDate : stack1), depth0))
    + " at "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.startTime : stack1), depth0))
    + "</span>\n"
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.headerImageURL : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            <table class=\"main\" style=\"border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background: #ffffff; border-radius: 3px;\">\n\n              <!-- START MAIN CONTENT AREA -->\n              <tr>\n                <td class=\"wrapper\" style=\"font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;\">\n                  <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;\">\n                    <tr>\n                      <td style=\"font-family: sans-serif; font-size: 14px; vertical-align: top;\">\n                        <p style=\"font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;\">\n                          "
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.greeting : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "")
    + " "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.guest : depth0)) != null ? stack1.name : stack1), depth0))
    + "!</p>\n                        <p style=\"font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;\">\n                          "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.message : depth0)) != null ? stack1.html : stack1), depth0)) != null ? stack1 : "")
    + "</p>\n                      </td>\n                    </tr>\n                  </table>\n                </td>\n              </tr>\n\n            <!-- END MAIN CONTENT AREA -->\n            </table>\n\n            <!-- START FOOTER -->\n            <div class=\"footer\" style=\"clear: both; Margin-top: 10px; text-align: center; width: 100%;\">\n              <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;\">\n                <tr>\n                  <td class=\"content-block\" style=\"font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; font-size: 12px; color: #999999; text-align: center;\">\n                    <span class=\"apple-link\" style=\"color: #999999; font-size: 12px; text-align: center;\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.hostName : stack1), depth0))
    + ((stack1 = helpers["if"].call(alias3,((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.hostAddress : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</span>\n					<br/>This email was sent via mail merge from a Google spreadsheet the sender owns. If you don't want them to invite you to their events, send them angry email.\n                  </td>\n                </tr>\n                <tr>\n                  <td class=\"content-block powered-by\" style=\"font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; font-size: 12px; color: #999999; text-align: center;\">\n                    Invitiations were sent using Cordially Invitation Manager by Aprotim Sanyal. Email based on <a href=\"http://htmlemail.io\" style=\"color: #999999; font-size: 12px; text-align: center; text-decoration: none;\">HTMLemail</a>.\n                  </td>\n                </tr>\n              </table>\n            </div>\n            <!-- END FOOTER -->\n\n          <!-- END CENTERED WHITE CONTAINER -->\n          </div>\n        </td>\n        <td style=\"font-family: sans-serif; font-size: 14px; vertical-align: top;\">&nbsp;</td>\n      </tr>\n    </table>\n  </body>\n</html>\n";
},"useData":true});
templates['plaintext_invitation_template_no_details'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.lambda(((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.greeting : stack1), depth0)) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    return "Hello";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.event : depth0)) != null ? stack1.greeting : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + " "
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.guest : depth0)) != null ? stack1.name : stack1), depth0)) != null ? stack1 : "")
    + "!\n\n"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.message : depth0)) != null ? stack1.text : stack1), depth0)) != null ? stack1 : "");
},"useData":true});
})();