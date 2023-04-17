import jsdom from 'jsdom';
import fetch from 'node-fetch';
const { JSDOM } = jsdom;

export async function webscraper(req, res) {
  let scrapeURL = decodeURIComponent(req.url.split('?')[1]);
  res.statusCode = 200;
  console.log(scrapeURL)
  let rawHTML = (await (await fetch(scrapeURL)).text());

  let dom = new JSDOM(rawHTML);
  let document = dom.window.document;
  const extra_tags = document.querySelectorAll('head,link,meta,style,script');
  const extra_tags_length = extra_tags.length;
  for (let i = 0; i < extra_tags_length; i++) {
    try {

      extra_tags[i].remove();

    } catch (e) { continue; }
  }
  let text = dom.window.document.body.textContent;
  text = text.replaceAll('\n', ' ').replaceAll('\t', ' ').replaceAll('\r', ' ').replaceAll('  ', ' ').replaceAll('  ', ' ').replaceAll('\n', ' ').replaceAll('\t', ' ').replaceAll('\r', ' ').replaceAll('  ', ' ').replaceAll('  ', ' ');


  let words = text.split(' ');
  let words_length = words.length;
  text = '';

  for (let i = 0; i < words_length; i++) {
    let word = words[i].trim();
    if (word.length > 0) {
      text = text + word + ' ';
    }
  }

  res.setHeader('Access-Control-Allow-Origin', '*');
  return res.end(text);

}

export async function wsPackage(req, res) {

  let scrapeURL = decodeURIComponent(req.url.split('?')[1]);
  res.statusCode = 200;
  console.log(scrapeURL);
  let options = {
    method: "GET",
    headers: {
      "origin": "https://www.usaa.com",
      "referer": "https://www.usaa.com/",
      "cookie": "akmachineid=akmaHJ48c82u0t5YT94VHy/Uf3cMg2f5Sjq0Vzk8XLP7/vBdiLdUH4ee0VCLWL80M9asE1hNG5dT8kpLoh9Unecwvw==; ak_esd=US:TX; dcenv=1a; dcenveq=wa; _cls_v=5d382b7c-34d7-47b7-9101-05c2af526791; _cls_s=cdfbed86-7d82-4330-8043-a67bada651d1:0; AMCV_47977B2A53A852210A490D45%40AdobeOrg=1585540135%7CMCMID%7C16588301299378966364119128078569728778%7CMCAID%7CNONE%7CvVersion%7C4.4.0; MemberECID=2|126642974903|8a6d8|c90794a8_c944_4ed2_a8b7_21b6f2f5aa60|6ef1bb7c; ECID=b09094bc-bfe8-4253-a549-a12f3c2a0c44; _abck=D6C1F4843024AE32F5F67F403449C069~-1~YAAQXDPKF2KxBliHAQAAwNJ6fQl0+dXyQxi1pSx57HFtmMhWn4Xq94My2DQzOr22a3neH72pL/1JGU/O7QqG6Qc7AXOYJMu63NmSZdp4txu0sBlFM0JrfEZPWfd2H86yvdThrRfY1enMLH82LRxNiXROiuZPnCSYBtBFR/Jj03PhEd++v8gZ3DHEn9Gx/qZs7tGaIJLG0Kqp9Nm6zTui/9BNfzekU3i6wwL/O4o1WP2WJr7jFeKtX6ldkgVMR+1Q1Hn7FXkyaQX8ZNhNHm+4kEzevwNvQMu6SvZXODRc4sXsDuZQOUZcqECDqMv7B+PgjihdleKTjWkfDwPFmyA9sArEIamdYGQH/5iPthIXKZOvMBTuL0X0BUaUltPQz1rYWsbX0FCyjQ==~-1~-1~-1; bm_sz=B90806249BB1C817CF193C0477F17558~YAAQXDPKF2OxBliHAQAAwNJ6fROsbro5ilaYSRHVWYhVwTC1bXzWIJjr9blYoGulywhga7439OJILEjbd3R8PyAtR6BwRm2vXcYYQaFtyYII7Q086A0s7wVwGURq9I364jEuFOni853Lzv+FOIslUa65R1PsX/398+x/+ESZQ8vV/4hCs4mQRWVbty6Zkty05GqeN7s5+Pf6jxmYqmaRWg3I5U6jerCJZzdqzXezJUyIDdYKSNAA/FEkFDa5+bJjODK3Xfv4Q3Fzog73HsZSRODFZy4+2R+HWfhdjBM7ntnr~3684673~4473142; cjConsent=MHxOfDB8Tnww; cjCountry=US; cjLiveRampLastCall=2023-04-14T01:56:57.133Z; cjUser=225d5ba3%2D92d2%2D4ac8%2D9a40%2Db9a1b57555ef; MemberGlobalSession=2:1116:30GGZA7M1556ZWT2LR1JB; JSESSIONID=0000Cr0b1jdiozF1rfjSu7DGe2-:1gt2olsn2:1gt2oe2cc:1gt2s19qm:1gt24lb7n; akusaa=akusaaY1YYaW33FAaSc/OONBZ4ZNrkgn4IY8BOj5s7tO+j3LSBfxy4cT25Zu4K4MgtPDFiP5iJhPDdTXjCMxPx9XyRGA==; VisitorId=30GGZA7M1556ZWT2LR1JB20230413; grpId=8; utag_main=v_id:01877bbdb26600168bc812e3eed70506e005006600978$_sn:3$_se:9$_ss:0$_st:1681444761046$vapi_domain:usaa.com$dc_visit:3$ses_id:1681441323924%3Bexp-session$_pn:8%3Bexp-session$dc_event:9%3Bexp-session$dc_region:us-east-1%3Bexp-session$daUID:lgfyr7s32biew2%3Bexp-session; s_pers=%20gpv_pn%3Dwww%257Cent%257Cent%257Cent%257Cn_a%257Cn_a%257Csea%257Csearch_results%7C1681444763875%3B%20s_nr%3D1681442963878-Repeat%7C1684034963878%3B; s_sess=%20omn_searchphrase%3Dwhat%2520is%2520a%2520motorcycle%3B%20s_cc%3Dtrue%3B"
    }

  }


  let rawHTML = (await (await fetch(scrapeURL, options)).text());
  console.log(rawHTML);
  let dom = new JSDOM(rawHTML);
  let document = dom.window.document;
  const extra_tags = document.querySelectorAll('head,link,meta,style,script');
  const extra_tags_length = extra_tags.length;
  for (let i = 0; i < extra_tags_length; i++) {
    try {

      extra_tags[i].remove();

    } catch (e) { continue; }
  }
  let text = dom.window.document.body.textContent;
  text = text.replaceAll('\n', ' ').replaceAll('\t', ' ').replaceAll('\r', ' ').replaceAll('  ', ' ').replaceAll('  ', ' ').replaceAll('\n', ' ').replaceAll('\t', ' ').replaceAll('\r', ' ').replaceAll('  ', ' ').replaceAll('  ', ' ');

  let words = text.split(' ');
  let words_length = words.length;
  text = '';

  for (let i = 0; i < words_length; i++) {
    let word = words[i].trim();
    if (word.length > 0) {
      text = text + word + ' ';
    }
  }

  let textPacks = [];

  let textChunks = text.split('.');

  let chunk = '';

  while (textChunks.length > 0) {
    while ((chunk.length < 500) && (textChunks.length > 0)) {
      chunk = chunk + textChunks.shift().trim() + '.';
    }
    textPacks.push(chunk);
    chunk = '';
  }

  return JSON.stringify(textPacks);


}

