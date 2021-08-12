const titles = [
    "Banner Ads",
    "Pop Under",
    "push notif",
    "inpage push",
    "Skim",
];

const content = [
    " Banner ad is a traditional (and the most Google-friendly) display ad format which looks like a commercial image or an animation appearing on a web page. Available in two sizes: 300х250 и 300х100.<br>Choose it to promote your product/offer to get misclick protection, multicreative tool and wide selection of GEOs. And enjoy high CPM rates and 100% fillrate when monetizing your website. ",
    "Popunder is a separate advertising area that is loaded under the main active window or tab, after clicking on the page. <br> It goes unnoticed until the main browser window or a tab is closed, focusing attention and advertising contact.Pops also win the problem of “blindness” and perfectly runs on different platforms.",
    "Push Notification is an ad that allows you to monetize or advertise your audience even if they are not browsing the web. <br> Website visitor receives an invitation to subscribe for news or special offers. Subscribed users receive notification ads.",
    "InPage push is a native push message that appears when a user is browsing the Publishers’ website. <br> Unlike Push Notifications it’s available on any OS type, even iOS, and doesn’t require user subscription to show the advertisement so it provides high reach and fill-rate. <br> Quite a solution to expand your reach or get additional monetization.",
    "'SKIM' is a link that a publisher inserts on a specific site element, and after clicking on it, an advertisement appears to the user. <br> SKIM gives 100% control of your sold traffic amount, higher CR to advertisers and CPM rates to publishers."
]




$(document).ready(function () {

    $(".adv-option").click(function () {
        let id = $(this).attr("id");
        $(".slideUp").fadeOut(500, function () {
            id = id.charAt(id.length - 1);
            // $(this).css("background", "yellow");
            console.log(id);


            $("#adv-title").html(titles[id - 1]);

            const imageSrc = "assets/advertise-options/sample" + id + ".gif";
            $("#adv-img").attr("src", imageSrc);

            $("#adv-content").html(content[id - 1]);
            $(".slideUp").fadeIn(500);
        });
    });
});