const superagent = require('superagent');
const urlanaly = require("url");


let url = 'https://mapi.vip.com/vips-mobile/rest/shopping/wap/product/detail/v5?app_name=shop_wap&app_version=4.0&api_key=8cec5243ade04ed3a02c5972bcda0d3f&mobile_platform=2&source_app=yd_wap&warehouse=VIP_NH&fdc_area_id=104104106&province_id=104104&mars_cid=1582274570603_a0d1de0b659701fdcfe39e7d97d5f453&mobile_channel=mobiles-%7C%7C&standby_id=nature&brandId=0&productId=6917916860451468302&act=intro&price_fields=vipshopPrice%2CsaleSavePrice%2CspecialPrice%2CsalePriceTips%2CvipDiscount%2CpriceIconURL%2CpriceIconMsg%2Cmin_vipshop_price%2C%20max_vipshop_price%2Cmax_market_price%2C%20min_market_price%20%2Cpromotion_price_type%2Cpromotion_price%2Cpromotion_price_suff%2Cpromotion_price_tips&haitao_description_fields=descri_image%2Cbeauty_descri_image%2Ctext%2Cmobile_descri_image%2Cmobile_prompt_image&is_multicolor=1&is_get_TUV=1&kfVersion=1&device=3&functions=product_comment%2Csku_price%2Cactive_price%2Cbrand_store_info%2Cluxury_info%2CnewBrandLogo%2Creduced_point_desc%2Cwh_transfer%2ChideOnlySize%2CshowReputation%2CatmospherePicture%2ChaitaoFinanceVip%2CbanInfo&is_get_pms_tips=1&highlightBgImgVer=1&supportSquare=1&_=1582444261'
superagent.get(url,function(err,res){
    if(err) throw err;
    superagent.get('https://m.vip.com' + res.req.path,function(err,res){
        console.log(res)
    });
})