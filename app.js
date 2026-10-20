/* ==================== LIBRARY: channels, placements, ad unit specs ==================== */
const TIERS=['lean','standard','full'], TIERNAME=['Lean','Standard','Full'];
const STAGE={Awareness:'aw',Consideration:'co',Conversion:'cv'};
const BUYUNIT={CPM:'impressions',CPC:'clicks',CPV:'views',CPL:'leads',CPS:'sends'};

const UNITS={
 li_image:{platform:'LinkedIn',name:'Single Image Ad',variants:['1.91:1 · 1200×627','1:1 · 1080×1080'],files:'JPG, PNG, GIF (static)',max:'5 MB',length:'—',copy:['Intro text ≤150 chars recommended (600 max)','Headline ≤70 chars recommended (200 max)','CTA button from LinkedIn list'],notes:'Keep logo and key claim inside the center 80%.',lead:10},
 li_video:{platform:'LinkedIn',name:'Video Ad',variants:['16:9 · 1920×1080','1:1 · 1080×1080','9:16 · 1080×1920'],files:'MP4',max:'200 MB',length:'15–30s recommended (3s–30min)',copy:['Intro text ≤150 chars recommended','Headline ≤70 chars','Burned-in captions or .srt file'],notes:'Brand and proof point in the first 3 seconds; most views are muted.',lead:21},
 li_tla:{platform:'LinkedIn',name:'Thought Leader Ad',variants:['Organic member post (image, video or text)'],files:'As posted by the member',max:'—',length:'—',copy:['Post up to 3,000 chars','Sponsorship approval from the member'],notes:'Post cannot be edited once promoted. Use exec and Mobile Insiders creator posts.',lead:7},
 li_doc:{platform:'LinkedIn',name:'Document Ad',variants:['PDF, 1:1 or 4:5 pages'],files:'PDF, PPT, DOCX',max:'100 MB · 300 pages',length:'≤10 pages recommended',copy:['Intro text ≤150 chars recommended','Headline ≤70 chars'],notes:'Gate after 3–5 preview pages with a Lead Gen Form.',lead:15},
 li_lgf:{platform:'LinkedIn',name:'Lead Gen Form',variants:['Form'],files:'—',max:'—',length:'—',copy:['Headline ≤60 chars','Details ≤160 chars','3–4 questions recommended (12 max)','Privacy policy URL, thank-you message ≤300 chars'],notes:'Sync to CRM / MAP before launch.',lead:5},
 li_conv:{platform:'LinkedIn',name:'Conversation Ad',variants:['Message flow','Banner 300×250 (desktop, optional)'],files:'JPG, PNG',max:'2 MB banner',length:'—',copy:['Opening message ≤500 chars recommended (8,000 max)','Up to 5 CTA buttons ≤25 chars each','Sender: real person with profile photo'],notes:'Map each button to a branch before trafficking.',lead:10},
 gs_rsa:{platform:'Google Ads',name:'Responsive Search Ad',variants:['RSA set per ad group'],files:'—',max:'—',length:'—',copy:['Up to 15 headlines ≤30 chars','Up to 4 descriptions ≤90 chars','2 path fields ≤15 chars'],notes:'Pin brand headline in position 1 for brand ad groups.',lead:5},
 gs_ext:{platform:'Google Ads',name:'Search assets',variants:['Sitelinks','Callouts','Image asset 1.91:1 · 1200×628','Image asset 1:1 · 1200×1200'],files:'JPG, PNG',max:'5 MB',length:'—',copy:['Sitelink text ≤25 chars, 2 lines ≤35 chars','Callouts ≤25 chars'],notes:'',lead:5},
 x_image:{platform:'X',name:'Image Ad',variants:['1:1 · 1200×1200','1.91:1 · 1200×628'],files:'PNG, JPG',max:'5 MB',length:'—',copy:['Post text ≤280 chars (≤100 recommended)','Website card headline ≤70 chars'],notes:'',lead:7},
 x_video:{platform:'X',name:'Video Ad',variants:['1:1 · 1200×1200','16:9 · 1920×1080','9:16 · 1080×1920'],files:'MP4, MOV',max:'1 GB',length:'≤15s recommended (2:20 max)',copy:['Post text ≤280 chars','Captions recommended'],notes:'',lead:14},
 rd_image:{platform:'Reddit',name:'Promoted Post · Image',variants:['1:1 · 1080×1080','4:5 · 1080×1350'],files:'JPG, PNG, GIF',max:'20 MB',length:'—',copy:['Headline ≤300 chars (≤150 recommended)','Native, practitioner tone; no hard sell'],notes:'Turn comments on and assign a community manager.',lead:7,verify:true},
 yt_instream:{platform:'YouTube',name:'Skippable In-stream',variants:['16:9 · 1920×1080'],files:'Upload to YouTube (MP4/MOV)',max:'—',length:'15–30s recommended; skippable after 5s',copy:['Headline ≤30 chars (long ≤90)','Description ≤90 chars','Companion banner auto-generated'],notes:'Logo and message inside the first 5 seconds.',lead:21},
 yt_shorts:{platform:'YouTube',name:'Shorts',variants:['9:16 · 1080×1920'],files:'Upload to YouTube',max:'—',length:'15–30s recommended (60s max)',copy:['Headline ≤40 chars'],notes:'Keep text clear of the bottom 20% and right edge (UI overlay).',lead:14},
 nl_sponsor:{platform:'Publisher',name:'Newsletter sponsorship',variants:['Hero image 600×300','Logo (PNG, transparent)'],files:'PNG, JPG',max:'Per media kit',length:'—',copy:['Headline ≤60 chars','Body 50–75 words','1 CTA with tracked URL'],notes:'Specs vary by publisher. Confirm against the media kit.',lead:10,verify:true},
 iab_display:{platform:'Programmatic / publisher',name:'IAB display set',variants:['300×250','728×90','970×250','300×600','320×50','160×600'],files:'JPG, PNG, GIF, HTML5',max:'150 KB initial load',length:'Animation ≤15s, max 3 loops',copy:['Headline ≤8 words','CTA ≤3 words'],notes:'1px border on white backgrounds. HTML5 needs clickTag.',lead:10},
 native_display:{platform:'Programmatic',name:'Native display',variants:['1.91:1 · 1200×627','1:1 · 1200×1200','Logo 1:1 ≥300×300'],files:'JPG, PNG',max:'1 MB',length:'—',copy:['Headline ≤50 chars','Body ≤90 chars','CTA ≤15 chars'],notes:'',lead:7},
 native_article:{platform:'Publisher',name:'Sponsored article',variants:['Header image 1200×675','Logo'],files:'DOCX copy + JPG/PNG',max:'—',length:'800–1,200 words',copy:['2–3 links with UTM','Customer quote with approval'],notes:'Publisher editorial review adds about a week.',lead:21},
 podcast:{platform:'Podcast',name:'Host-read mid-roll',variants:['Talking points'],files:'DOC',max:'—',length:'60s read',copy:['3–5 talking points','Pronunciation guide','Vanity URL or promo code'],notes:'',lead:10},
 creator_post:{platform:'Creator',name:'Paid creator post',variants:['Creator brief'],files:'DOC brief',max:'—',length:'—',copy:['Key messages and proof points','Mandatory #ad / partnership disclosure'],notes:'Creator keeps their own voice; approve claims only.',lead:14},
 event_pkg:{platform:'Event organizer',name:'Event digital package',variants:['App / site banner (organizer spec)','Attendee email','Logo files (SVG, EPS)'],files:'PNG, SVG, HTML email',max:'Per organizer',length:'—',copy:['Meeting-booking CTA','Booth / session details'],notes:'Organizer deadlines are usually 4–6 weeks before the show.',lead:30,verify:true},
 wc_moments:{platform:'WeChat (Tencent Ads)',name:'Moments ad',variants:['Image 1:1 · 800×800','Video 16:9 · 1280×720','Video 9:16 · 720×1280'],files:'JPG, PNG, MP4',max:'Per Tencent Ads',length:'6–30s video',copy:['Outer text ≤40 Chinese characters','Localized ZH copy and landing page'],notes:'Tencent review and China-accessible landing page required.',lead:21,verify:true},
 wc_oa:{platform:'WeChat (Tencent Ads)',name:'Official Account article ad',variants:['Banner (Tencent Ads spec)'],files:'JPG, PNG',max:'Per Tencent Ads',length:'—',copy:['Title and description per Tencent Ads limits','Localized ZH copy'],notes:'',lead:21,verify:true},
 wc_channels:{platform:'WeChat (Tencent Ads)',name:'Channels video',variants:['9:16 · 1080×1920'],files:'MP4',max:'Per Tencent Ads',length:'6–60s',copy:['ZH captions burned in'],notes:'',lead:21,verify:true},
 bd_search:{platform:'Baidu',name:'Search ad',variants:['Text ad set'],files:'—',max:'—',length:'—',copy:['Title ≤25 Chinese characters','Description ≤80 Chinese characters'],notes:'Landing page must be reachable in mainland China.',lead:21,verify:true},
 nv_search:{platform:'Naver',name:'PowerLink search ad',variants:['Text ad set'],files:'—',max:'—',length:'—',copy:['Title ≤15 chars','Description ≤45 chars','Localized KO copy'],notes:'',lead:10,verify:true},
 nv_gfa:{platform:'Naver',name:'GFA feed / display',variants:['1.91:1 · 1200×628','1:1 · 1200×1200'],files:'JPG, PNG',max:'Per Naver GFA',length:'—',copy:['Headline and body per Naver GFA limits','Localized KO copy'],notes:'',lead:14,verify:true},
};

const FORMATS=[
 {id:'video',name:'Video',note:'In-feed, in-stream, Shorts, Channels'},
 {id:'static',name:'Static image',note:'Single image, in-feed, native, logos'},
 {id:'display',name:'Display banners (static / HTML5)',note:'IAB sizes, publisher banners'},
 {id:'document',name:'Document / PDF',note:'Gated reports, decks'},
 {id:'text',name:'Search & text ads',note:'RSA sets, sitelinks, local search'},
 {id:'messaging',name:'Messaging & lead forms',note:'Conversation ads, lead gen forms'},
 {id:'social_post',name:'Thought leader & creator posts',note:'Exec and creator posts, briefs'},
 {id:'article',name:'Newsletter & sponsored copy',note:'Newsletter units, articles'},
 {id:'audio',name:'Audio',note:'Podcast host-reads'},
 {id:'event',name:'Event packages',note:'Organizer banners, attendee email'}];
const FMTNAME=Object.fromEntries(FORMATS.map(f=>[f.id,f.name]));
const UNIT_META={li_image:['static','paid_social'],li_video:['video','paid_social'],li_tla:['social_post','paid_social'],li_doc:['document','paid_social'],li_lgf:['messaging','paid_social'],li_conv:['messaging','paid_messaging'],
 gs_rsa:['text','cpc'],gs_ext:['text','cpc'],x_image:['static','paid_social'],x_video:['video','paid_social'],rd_image:['static','paid_social'],yt_instream:['video','paid_video'],yt_shorts:['video','paid_video'],
 nl_sponsor:['article','newsletter'],iab_display:['display','display'],native_display:['static','native'],native_article:['article','sponsored_content'],podcast:['audio','audio'],creator_post:['social_post','influencer'],
 event_pkg:['event','event'],wc_moments:['static','paid_social'],wc_oa:['display','display'],wc_channels:['video','paid_social'],bd_search:['text','cpc'],nv_search:['text','cpc'],nv_gfa:['static','display']};
const TAGS={
 linkedin:{tag:'LinkedIn Insight Tag (site-wide) + Conversions API',events:'Page view, sign-up start, account created, report download, webinar registration',click:'li_fat_id (auto) + UTMs; Lead Gen Forms synced to CRM / MAP with hidden field = line ID',extra:'Matched audiences from CRM lists; Insight Tag retargeting audiences'},
 google:{tag:'Google tag (gtag.js) + Google Ads conversion actions; enhanced conversions; GA4 conversion import',events:'Sign-up start, account created, first campaign created',click:'Auto-tagging (gclid) on; ValueTrack {campaignid} {adgroupid} {keyword} in final URL suffix',extra:'Customer Match lists for brand exclusions'},
 x:{tag:'X Pixel (base code + event codes) + X Conversions API',events:'Page view, sign-up start, account created',click:'twclid (auto) + UTMs',extra:'Website activity audiences'},
 reddit:{tag:'Reddit Pixel + Reddit Conversions API',events:'Page view, sign-up start, lead',click:'rdt_cid (auto) + UTMs',extra:''},
 youtube:{tag:'Google Ads conversion actions (shared Google tag); view-through conversions on',events:'Engaged view, site visit, sign-up start',click:'Auto-tagging (gclid) + UTMs',extra:'Video viewer remarketing lists'},
 trade:{tag:'Ad server (e.g., CM360) third-party display tags + 1×1 impression trackers for newsletters and articles',events:'Floodlight / site activity: landing view, sign-up start',click:'Ad-server click trackers wrapping the UTM URL',extra:'Verification (e.g., DV or IAS) on display; publisher sends delivery screenshots for newsletters'},
 creators:{tag:'Vanity URLs and promo codes per creator / show, redirecting to UTM URLs',events:'Landing view, sign-up start',click:'Unique UTM per creator or episode',extra:'Creator reports post analytics weekly'},
 abm:{tag:'ABM platform pixel (site-wide) + ad-server tags',events:'Account engagement, page view, sign-up start',click:'DSP click macros + UTMs',extra:'Account list sync from CRM; exclude active customers per format'},
 events:{tag:'Organizer lead-retrieval export + meeting-scheduler tracking',events:'Meeting booked, booth scan, session attendance',click:'QR codes and scheduler links carry UTMs',extra:'Upload attendee list to CRM within 48 hours'},
 wechat:{tag:'Tencent Ads conversion tracking (data source JS / SDK) on a China-hosted H5 landing page',events:'Page view, form submit, follow official account',click:'Tencent click ID (auto) + UTMs',extra:'Landing page hosted in mainland China; PIPL consent'},
 baidu:{tag:'Baidu Tongji (百度统计) + Baidu Ads OCPC conversion tracking',events:'Page view, form submit',click:'bd_vid (auto) + UTMs',extra:'ICP-licensed, China-hosted landing page'},
 naver:{tag:'Naver Premium Log Analysis (wcs script) + Naver Ads conversion tracking',events:'Page view, sign-up start, form submit',click:'Naver auto parameters + UTMs',extra:'PIPA consent on Korean landing page'},
};
const UTM_SRC={linkedin:'linkedin',google:'google',x:'x',reddit:'reddit',youtube:'youtube',trade:'tradepress',creators:'creators',abm:'abm_dsp',events:'events',wechat:'wechat',baidu:'baidu',naver:'naver'};
const TRADE_PUB={NA:'PocketGamer.biz, GamesIndustry.biz, AdExchanger, Mobile Dev Memo',EMEA:'PocketGamer.biz, GamesIndustry.biz, Mobile Dev Memo',CN:'GameLook, Youxituoluo (游戏陀螺)',JP:'Social Game Info, Gamebiz',KR:'ThisIsGame, GameMeca',SEA:'PocketGamer.biz Asia, Tech in Asia',LATAM:'PocketGamer.biz, local gaming trades'};

// ini = index of initiative (0 brand / 1 cross-sell / 2 data), min = first tier (0 lean, 1 standard, 2 full)
const CH=[
 {id:'linkedin',name:'LinkedIn',group:'Paid social',weight:34,markets:{exclude:['CN']},personas:['dm','tech','user'],pl:[
  {id:'li_si',name:'Sponsored Content · Single Image',units:['li_image'],min:0,share:30,buy:'CPM',rate:55,stage:'Awareness',ini:0,tgt:'Job functions & titles (VP Growth, Head of UA, UA Manager, Media Buyer); industry: Computer Games, Mobile Gaming; company list: Top 200 studios + lookalikes',kpi:'CTR ≥ 0.5%; eCPM'},
  {id:'li_vid',name:'Sponsored Content · Video (proof-point testimonials)',units:['li_video'],min:0,share:25,buy:'CPM',rate:60,stage:'Awareness',ini:0,tgt:'Same as single image + video viewer retargeting',kpi:'VTR ≥ 25%; cost per 3s view'},
  {id:'li_tla',name:'Thought Leader Ads (execs + creators)',units:['li_tla'],min:0,share:15,buy:'CPM',rate:40,stage:'Awareness',ini:0,tgt:'Followers of competitor and industry pages; job titles above',kpi:'Engagement ≥ 2%; social share of voice'},
  {id:'li_doc',name:'Document Ads + Lead Gen (gated report)',units:['li_doc','li_lgf'],min:1,share:20,buy:'CPL',rate:120,stage:'Consideration',ini:0,tgt:'Head of UA, UA Manager, Growth Data Science at target accounts',kpi:'CPL ≤ $120; form completion ≥ 10%'},
  {id:'li_rt',name:'Retargeting · existing advertisers (cross-sell)',units:['li_image'],min:1,share:10,buy:'CPC',rate:9,stage:'Conversion',ini:1,tgt:'Matched audiences: current advertiser contact lists (single-format users); site visitors',kpi:'CTR ≥ 0.8%; second-format activation'},
  {id:'li_tech',name:'Sponsored Content · technical webinars & docs (GA4, developer data)',units:['li_image'],min:1,share:10,buy:'CPC',rate:9,stage:'Consideration',ini:2,tgt:'Head of UA, Ad Ops, Growth Data Science; current advertisers not yet sharing developer data',kpi:'Webinar registrations; GA4 / data-sharing opt-ins'},
  {id:'li_conv',name:'Conversation Ads · workshop & webinar invites',units:['li_conv'],min:2,share:10,buy:'CPS',rate:0.6,stage:'Consideration',ini:2,tgt:'HOM / Torso account lists; UA and Ad Ops leads',kpi:'Open ≥ 50%; click ≥ 3%; registrations'}]},
 {id:'google',name:'Google Search',group:'Paid search',weight:12,markets:{exclude:['CN']},personas:['tech','user'],pl:[
  {id:'gs_brand',name:'Brand + product terms',units:['gs_rsa','gs_ext'],min:0,share:35,buy:'CPC',rate:4,stage:'Conversion',ini:1,tgt:'Exact / phrase: brand, product and feature names',kpi:'Impression share ≥ 90%; sign-up CVR'},
  {id:'gs_cat',name:'Category terms (UA platform, ROAS campaigns)',units:['gs_rsa','gs_ext'],min:0,share:45,buy:'CPC',rate:9,stage:'Consideration',ini:0,tgt:'Phrase / broad + smart bidding: “user acquisition platform”, “ROAS campaign”, “mobile game UA”',kpi:'CPC ≤ $9; CTR ≥ 4%'},
  {id:'gs_comp',name:'Competitor conquest',units:['gs_rsa'],min:2,share:20,buy:'CPC',rate:12,stage:'Consideration',ini:0,tgt:'Competitor brand + “alternative” terms (no trademark in ad copy)',kpi:'CTR ≥ 3%; assisted sign-ups'}]},
 {id:'x',name:'X (Twitter)',group:'Paid social',weight:7,markets:{exclude:['CN']},boost:{JP:2.5},personas:['tech','user'],pl:[
  {id:'x_img',name:'Promoted posts · image',units:['x_image'],min:1,share:50,buy:'CPM',rate:9,stage:'Awareness',ini:0,tgt:'Follower lookalikes of UA / AdTech thought leaders; keywords',kpi:'Engagement ≥ 1%'},
  {id:'x_vid',name:'Promoted video · proof-point clips',units:['x_video'],min:1,share:50,buy:'CPM',rate:12,stage:'Awareness',ini:0,tgt:'Same as image + conference hashtags',kpi:'VTR ≥ 20%'}]},
 {id:'reddit',name:'Reddit',group:'Paid social',weight:3,markets:{only:['NA','EMEA']},personas:['user'],pl:[
  {id:'rd_img',name:'Promoted posts · UA & ad-ops communities',units:['rd_image'],min:2,share:100,buy:'CPM',rate:6,stage:'Consideration',ini:2,tgt:'Communities: r/gamedev, r/mobilemarketing, r/adops, r/PPC',kpi:'CTR ≥ 0.4%; comment sentiment'}]},
 {id:'youtube',name:'YouTube',group:'Online video',weight:9,markets:{exclude:['CN']},personas:['dm','tech','user'],pl:[
  {id:'yt_in',name:'Skippable in-stream · testimonial series',units:['yt_instream'],min:1,share:70,buy:'CPV',rate:0.06,stage:'Awareness',ini:0,tgt:'Custom segments: UA / AdTech search terms, competitor channel viewers; customer match',kpi:'VTR ≥ 25%; CPV ≤ $0.06'},
  {id:'yt_sh',name:'Shorts · 15s cut-downs',units:['yt_shorts'],min:2,share:30,buy:'CPM',rate:8,stage:'Awareness',ini:0,tgt:'Same custom segments',kpi:'View rate; earned subs'}]},
 {id:'trade',name:'Trade & endemic press',group:'Trade & endemic',weight:13,markets:'all',personas:['dm','tech'],pub:m=>TRADE_PUB[m.id]||'Local gaming / ad-tech trades',pl:[
  {id:'tr_nl',name:'Newsletter sponsorship',units:['nl_sponsor'],min:0,share:40,buy:'Flat',rate:4500,unit:'sends',stage:'Consideration',ini:0,tgt:'Publisher subscriber base (studio execs, UA leads)',kpi:'CTR ≥ 1.5%'},
  {id:'tr_disp',name:'Run-of-site display (IAB)',units:['iab_display'],min:1,share:35,buy:'CPM',rate:30,stage:'Awareness',ini:0,tgt:'Run of site, ad-tech and UA sections',kpi:'Viewability ≥ 70%; CTR ≥ 0.15%'},
  {id:'tr_nat',name:'Sponsored article · customer proof point',units:['native_article'],min:2,share:25,buy:'Flat',rate:15000,unit:'articles',stage:'Consideration',ini:0,tgt:'Publisher audience + social amplification',kpi:'Time on page; referral sign-ups'}]},
 {id:'creators',name:'Newsletters, podcasts & creators',group:'Trade & endemic',weight:6,markets:{only:['NA','EMEA']},personas:['dm','tech'],pub:()=>'Deconstructor of Fun, GameMakers, industry creators',pl:[
  {id:'cr_nl',name:'Specialist newsletter sponsorship',units:['nl_sponsor'],min:1,share:50,buy:'Flat',rate:3500,unit:'sends',stage:'Consideration',ini:0,tgt:'Subscriber base',kpi:'CTR ≥ 2%'},
  {id:'cr_inf',name:'Paid creator posts (LinkedIn / X)',units:['creator_post'],min:1,share:20,buy:'Flat',rate:2500,unit:'posts',stage:'Awareness',ini:0,tgt:'Creator follower base',kpi:'Mentions, shares, comments; social SOV'},
  {id:'cr_pod',name:'Podcast host-read',units:['podcast'],min:2,share:30,buy:'Flat',rate:6000,unit:'episodes',stage:'Awareness',ini:0,tgt:'Listener base (studio execs, growth leads)',kpi:'Vanity URL visits'}]},
 {id:'abm',name:'ABM programmatic',group:'Programmatic',weight:8,markets:{exclude:['CN']},personas:['dm','tech'],pub:()=>'ABM DSP (e.g., Demandbase, 6sense)',pl:[
  {id:'abm_d',name:'Account-based display · target account list',units:['iab_display','native_display'],min:1,share:70,buy:'CPM',rate:28,stage:'Consideration',ini:0,tgt:'Top 200 studios + HOM / Torso target accounts; buying-committee roles',kpi:'Account reach ≥ 60%; engaged accounts'},
  {id:'abm_rt',name:'Site retargeting · product, pricing & docs visitors',units:['iab_display'],min:1,share:30,buy:'CPM',rate:12,stage:'Conversion',ini:1,tgt:'Site visitors (30-day), excluding active customers of that format',kpi:'Return-visit rate; sign-ups'}]},
 {id:'events',name:'Event amplification',group:'Events',weight:6,markets:'all',personas:['dm'],burst:'events',pub:()=>'Event organizers (per moment)',pl:[
  {id:'ev_pkg',name:'Sponsor digital package (app, attendee email)',units:['event_pkg'],min:1,share:60,buy:'Flat',rate:12000,unit:'events',stage:'Consideration',ini:0,tgt:'Registered attendees',kpi:'Meetings booked; booth scans'},
  {id:'ev_soc',name:'Geo-targeted paid social · meeting booking',units:m=>m.id==='CN'?['wc_moments']:['li_image'],min:1,share:40,buy:'CPM',rate:45,stage:'Consideration',ini:0,tgt:'Venue geo-fence + attendee job titles, 2 weeks pre-show',kpi:'Meetings booked; CTR ≥ 0.6%'}]},
 {id:'wechat',name:'WeChat',group:'Regional platforms',weight:14,markets:{only:['CN']},personas:['dm','tech','user'],pub:()=>'Tencent Ads',pl:[
  {id:'wc_m',name:'Moments ads',units:['wc_moments'],min:0,share:60,buy:'CPM',rate:15,stage:'Awareness',ini:0,tgt:'Industry & interest: game developers, publishers, ad-tech; lookalikes of studio list',kpi:'CTR ≥ 0.8%; follows'},
  {id:'wc_o',name:'Official Account article ads',units:['wc_oa'],min:1,share:25,buy:'CPC',rate:1.5,stage:'Consideration',ini:0,tgt:'Gaming / ad-tech official accounts',kpi:'CPC; account follows'},
  {id:'wc_c',name:'Channels video',units:['wc_channels'],min:2,share:15,buy:'CPM',rate:12,stage:'Awareness',ini:0,tgt:'Same as Moments',kpi:'Completion rate'}]},
 {id:'baidu',name:'Baidu Search',group:'Regional platforms',weight:8,markets:{only:['CN']},personas:['tech','user'],pub:()=>'Baidu',pl:[
  {id:'bd_s',name:'Brand + category search',units:['bd_search'],min:0,share:100,buy:'CPC',rate:2.5,stage:'Consideration',ini:1,tgt:'Brand, product and UA category terms in Chinese',kpi:'CTR ≥ 3%; leads'}]},
 {id:'naver',name:'Naver',group:'Regional platforms',weight:8,markets:{only:['KR']},personas:['tech','user'],pub:()=>'Naver',pl:[
  {id:'nv_s',name:'PowerLink search',units:['nv_search'],min:0,share:70,buy:'CPC',rate:1.8,stage:'Consideration',ini:1,tgt:'Brand, product and UA category terms in Korean',kpi:'CTR ≥ 3%'},
  {id:'nv_g',name:'GFA feed & display',units:['nv_gfa'],min:1,share:30,buy:'CPM',rate:6,stage:'Awareness',ini:0,tgt:'Interest: games, marketing, IT',kpi:'CTR ≥ 0.5%'}]},
];
for(const u in UNITS){UNITS[u].fmt=UNIT_META[u][0];UNITS[u].medium=UNIT_META[u][1]}
// copy limits used to fit the ad copy column (h = headline, b = body / primary text, cta = button)
const LIMS={li_image:{h:70,b:150},li_video:{h:70,b:150},li_tla:{b:3000},li_doc:{h:70,b:150},li_lgf:{h:60,b:160},li_conv:{b:500,cta:25},gs_rsa:{h:30,b:90},gs_ext:{h:25,b:35},
 x_image:{h:70,b:100},x_video:{b:100},rd_image:{h:150},yt_instream:{h:30,b:90},yt_shorts:{h:40},nl_sponsor:{h:60,b:450},iab_display:{h:40,cta:15},native_display:{h:50,b:90,cta:15},native_article:{h:90},
 podcast:{},creator_post:{},event_pkg:{h:60,b:300},wc_moments:{b:40},wc_oa:{h:28,b:60},wc_channels:{b:40},bd_search:{h:25,b:80},nv_search:{h:15,b:45},nv_gfa:{h:25,b:45}};
const CHMAP=Object.fromEntries(CH.map(c=>[c.id,c]));
const PLMAP={};CH.forEach(c=>c.pl.forEach(p=>PLMAP[p.id]={...p,ch:c}));

/* ==================== EXAMPLE STATE (from GTM Strategy · One Unity: Unity Acquire) ==================== */
const EXAMPLE_BRIEF=`GTM Strategy: One Unity · Unity Acquire (excerpt used to pre-fill this example)

Solution: Unity Acquire, the unified Vector-powered advertising experience (Unity Ads video + Tapjoy Offerwall in one dashboard on unity.com).

2026 initiatives
1. "Vector 2.0" Perception Reset + Brand Equity: shift the narrative to an agentic engine with unique engine/runtime data. KPI: 30% YoY uAds net revenue growth.
2. One Unity Adoption & Cross-Sell: make video + offerwall the default. KPIs: 11% YoY Offerwall revenue; +25% of uAds advertisers activating Offerwall.
3. Data Activation & Measurement Confidence: GA4 + Developer Data Framework. KPIs: 100% advertisers allowing developer data; % linking Google Analytics.

ICP: current advertisers (HOM >$10K/day, Torso $5–10K, Sub-torso $1–5K, SMB $200–1K) and new studios (Top 200 globally) on AppLovin / Meta / Google / TikTok.
Personas & where they learn:
- Decision-maker (CEO, CMO, Studio Head, VP Growth): LinkedIn; PocketGamer.biz, GamesIndustry.biz, AdExchanger; GDC, ChinaJoy, Pocket Gamer Connects; exec podcasts.
- Technical influencer (Head of UA, Ad Ops, Growth Data Science): LinkedIn + groups, UA Slack, X, Deconstructor of Fun, GameMakers.
- Day-to-day user (UA Manager, Media Buyer): LinkedIn, X, Reddit, UA forums, search / LLM search.
Markets: US and APAC emphasized (China, Japan, Korea); Turkey feedback noted.

Launch calendar: Q1-Mar D28 IAP ROAS + New ROAS Campaign Flow; Q2-Apr One Unity Dashboard Ph1 + Multi-Country Budget; Q2-May/Jun D28 IAA ROAS; Q2/Q3 2026 Growth & Monetization Report; Q2/Q3 Dashboard Ph4 unified onboarding (Offerwall); Q3 Unified uAds & OW SDK; Q4 Insights Agent; Q4 Unity Executive Summit [China]. Ongoing: Vector Spotlight video testimonials, customer proof points, Mobile Insiders co-marketing, new mobile LinkedIn newsletter, technical webinars.`;

function exampleState(){return{
 name:'One Unity · Unity Acquire 2026',product:'Unity Acquire (Unity Ads + Offerwall, powered by Vector)',brief:EXAMPLE_BRIEF,
 budgets:{lean:400000,standard:900000,full:1600000},start:'2026-03-01',end:'2026-12-31',
 markets:[
  {id:'NA',name:'North America',lang:'EN',on:true,weight:40},
  {id:'EMEA',name:'EMEA',lang:'EN',on:true,weight:20},
  {id:'CN',name:'China',lang:'ZH',on:true,weight:15},
  {id:'JP',name:'Japan',lang:'JA',on:true,weight:13},
  {id:'KR',name:'Korea',lang:'KO',on:true,weight:12},
  {id:'SEA',name:'Southeast Asia',lang:'EN',on:false,weight:5},
  {id:'LATAM',name:'LATAM',lang:'ES',on:false,weight:5}],
 personas:{dm:{label:'Decision-maker (CEO, CMO, VP Growth)',on:true},tech:{label:'Technical influencer (Head of UA, Ad Ops)',on:true},user:{label:'Day-to-day user (UA Manager, Media Buyer)',on:true}},
 initiatives:[
  {name:'"Vector 2.0" Perception Reset + Brand Equity',stage:'Awareness',pillar:'Vector is an agentic, game-native UA engine built on Unity engine and runtime data'},
  {name:'One Unity Adoption & Cross-Sell',stage:'Conversion',pillar:'Run video and offerwall from one dashboard; multi-format by default'},
  {name:'Data Activation & Measurement Confidence',stage:'Consideration',pillar:'Measurement you can trust: GA4 and developer data, less MMP dependence'}],
 moments:[
  {name:'D28 IAP ROAS + New ROAS Campaign Flow',month:'2026-03',type:'launch',ini:0},
  {name:'GDC',month:'2026-03',type:'event',ini:0},
  {name:'One Unity Dashboard Ph1 + Multi-Country Budget',month:'2026-04',type:'launch',ini:1},
  {name:'D28 IAA ROAS Campaign',month:'2026-06',type:'launch',ini:0},
  {name:'2026 Growth & Monetization Report',month:'2026-07',type:'content',ini:0},
  {name:'ChinaJoy',month:'2026-07',type:'event',ini:0},
  {name:'Dashboard Ph4 · unified onboarding (Offerwall)',month:'2026-08',type:'launch',ini:1},
  {name:'Unified uAds & Offerwall SDK',month:'2026-09',type:'launch',ini:1},
  {name:'Unity Executive Summit (China)',month:'2026-11',type:'event',ini:0},
  {name:'Insights Agent',month:'2026-12',type:'launch',ini:2}],
 channels:Object.fromEntries(CH.map(c=>[c.id,{on:true,weight:c.weight}])),
 concepts:{lean:2,standard:3,full:4},refresh:{lean:12,standard:8,full:6},rates:{},
 formats:defaultFormats(),landing:'https://unity.com/',copy:exampleCopy()
};}
function exampleCopy(){return{src:'One Unity · Unity Acquire 2026',
 voice:'Confident, specific and performance-first. Lead with outcomes (ROAS, retention, scale), name the data advantage, skip the hype.',
 ctas:'Start a campaign\nLearn more\nGet the report\nRegister now\nBook a meeting',
 proof:'Unico: Ad Revenue ROAS campaigns drove 4x+ scale on iOS and Android with flat CPI\nZephyrMobile: ~50% more installs and 7% lower iOS CPI across 6 puzzle titles with Vector\nVoodoo: improved campaign results at scale with high-quality users',
 ini:[
  {h:'Grow on D28 ROAS\nGame-native AI for D28 ROAS\nVector: UA that understands games\nSet the goal. Vector finds the players.\nThe UA engine built on Unity game data',
   b:'Tell Vector your goal. It handles bids and pacing.\nVector uses engine, runtime and IAP signals to find players who stay and pay. Launch D28 ROAS campaigns in minutes.\nZephyrMobile saw ~50% more installs and 7% lower iOS CPI across 6 puzzle titles with Vector.'},
  {h:'One login for all your UA\nOne Unity: Acquire\nVideo + offerwall. One dashboard.\nRun video and offerwall together',
   b:'Video + offerwall in one place.\nAdd Offerwall to your video campaigns in a few clicks and reach rewarded players at scale.\nLaunch Unity Ads video and Offerwall campaigns from one dashboard on unity.com, with one login and shared reporting.'},
  {h:'Less MMP guesswork\nLink GA4. Get sharper ROAS.\nUA measurement you can trust',
   b:'Link GA4 for sharper ROAS.\nReconcile Unity results with your own analytics, right in the dashboard.\nConnect GA4 and developer data so Vector optimizes on signals you already trust, not just delayed postbacks.'}]};}
function defaultFormats(){return Object.fromEntries(FORMATS.map(f=>[f.id,{on:true}]).concat([['_video',{lengths:'15s, 30s'}]]))}

const LSKEY='paid-media-bom-builder-v1';
let S;try{S=JSON.parse(localStorage.getItem(LSKEY)||'null')}catch(e){S=null}
if(!S||!S.markets)S=exampleState();
if(!S.formats)S.formats=defaultFormats();if(!S.formats._video)S.formats._video={lengths:'15s, 30s'};if(S.landing==null)S.landing='https://unity.com/';if(!S.copy)S.copy=exampleCopy();if(S.copy.src==null&&S.name==='One Unity · Unity Acquire 2026')S.copy.src=S.name;
let UI={tier:1,tab:'summary',group:'channel',mvp:'master'};
try{Object.assign(UI,JSON.parse(localStorage.getItem(LSKEY+'-ui')||'{}'))}catch(e){}
function save(){try{localStorage.setItem(LSKEY,JSON.stringify(S));localStorage.setItem(LSKEY+'-ui',JSON.stringify(UI))}catch(e){}}

/* ==================== HELPERS ==================== */
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const sum=a=>a.reduce((x,y)=>x+(+y||0),0);
const money=v=>'$'+Math.round(v).toLocaleString('en-US');
const rateFmt=(v,b)=>b==='Flat'?money(v):'$'+(+v).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
const compact=v=>v>=1e6?(v/1e6).toFixed(v>=1e7?0:1)+'M':v>=1e4?Math.round(v/1e3)+'K':Math.round(v).toLocaleString('en-US');
const parseD=s=>{const [y,m,d]=(s||'').split('-').map(Number);return new Date(Date.UTC(y||2026,(m||1)-1,d||1))};
const fmtD=dt=>dt.toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric',timeZone:'UTC'});
const isoD=dt=>dt.toISOString().slice(0,10);
const MONTHN=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
function monthsList(){const a=parseD(S.start),b=parseD(S.end);const out=[];if(!(b>=a))return out;let y=a.getUTCFullYear(),m=a.getUTCMonth();
 while(y<b.getUTCFullYear()||(y===b.getUTCFullYear()&&m<=b.getUTCMonth())){out.push(`${y}-${String(m+1).padStart(2,'0')}`);m++;if(m>11){m=0;y++}if(out.length>60)break}return out}
const monthLabel=k=>{const [y,m]=k.split('-');return MONTHN[+m-1]+' '+y.slice(2)};
function flightWeeks(){return Math.max(1,(parseD(S.end)-parseD(S.start))/6048e5)}
function eligible(c,m){const k=c.markets;if(k==='all')return true;if(k.only)return k.only.includes(m.id);if(k.exclude)return !k.exclude.includes(m.id);return true}
function activePl(c,tier){return c.pl.filter(p=>p.min<=tier)}
function vinfo(u,v){const U=UNITS[u];let fmt=U.fmt,logo=false;
 if(/^video/i.test(v))fmt='video';else if(/^logo/i.test(v)){fmt='static';logo=true}else if(/^image/i.test(v))fmt='static';else if(/^banner/i.test(v))fmt='display';
 const sz=v.match(/(\d{2,4})×(\d{2,4})/);let ratio=null;const rm=v.match(/(\d+(?:\.\d+)?:\d+)/);
 if(rm)ratio=rm[1];else if(sz){const r=sz[1]/sz[2],K=[['1.91:1',1.91],['1:1',1],['4:5',.8],['9:16',.5625],['16:9',1.778],['2:1',2],['3:4',.75],['4:3',1.333]];const k=K.find(k=>Math.abs(k[1]-r)<.03);ratio=k?k[0]:null}
 return {fmt,logo,size:sz?sz[1]+'×'+sz[2]:null,area:sz?sz[1]*sz[2]:0,ratio,label:v}}
const fmtOn=f=>S.formats[f]?.on!==false;
function variantsOf(u){return UNITS[u].variants.filter(v=>fmtOn(vinfo(u,v).fmt))}
function videoLengths(){const a=String(S.formats._video?.lengths||'').split(/[,;/]+/).map(x=>x.trim()).filter(Boolean);return a.length?a:['1 length']}
function unitsFor(p,m){const a=typeof p.units==='function'?p.units(m):p.units;return a.filter(u=>variantsOf(u).length)}
function rateOf(p){const r=S.rates[p.id];return r!=null&&r!==''&&!isNaN(r)?+r:p.rate}
function iniOf(p){const L=S.initiatives;if(!L.length)return {name:'—',pillar:'—'};return L[p.ini]||L[0]}
function personaShort(c){return c.personas.filter(k=>S.personas[k]?.on).map(k=>S.personas[k].label.split('(')[0].trim()).join(', ')||'—'}
function personaText(c){return c.personas.filter(k=>S.personas[k]?.on).map(k=>S.personas[k].label).join('; ')||'—'}

/* ==================== AD COPY ==================== */
const linesOf=t=>String(t||'').split('\n').map(x=>x.trim()).filter(Boolean);
function pickFit(list,lim,i){if(!list.length)return null;if(!lim)return {t:list[i%list.length],over:0};
 const fit=list.filter(x=>x.length<=lim);if(fit.length){const t=fit[fit.length-1-(i%fit.length)];return {t,over:0}}
 const t=list.slice().sort((a,b)=>a.length-b.length)[0];return {t,over:t.length-lim}}
function adCopy({fmt,logo,lim,ini,concepts,langs}){
 if(logo)return {rows:[],note:'Brand lockups only. No copy.',text:'Brand lockups only'};
 const C=S.copy||{},bank=(C.ini||[])[ini]||(C.ini||[])[0]||{},H=linesOf(bank.h),B=linesOf(bank.b),CT=linesOf(C.ctas),P=linesOf(C.proof);
 const loc=langs.filter(l=>l!=='EN');const note=loc.length?'Localize for '+loc.join(', ')+'; check limits after translation.':'';
 const rows=[];
 if(['audio','social_post'].includes(fmt)){rows.push({label:'Talking points',parts:[...H.slice(0,1).map(t=>({k:'Hook',t,over:0})),...P.slice(0,3).map(t=>({k:'Proof',t,over:0})),...CT.slice(0,1).map(t=>({k:'CTA',t,over:0}))]})}
 else if(fmt==='text'){const hs=[0,1,2].map(i=>pickFit(H,lim.h,i)).filter(Boolean),bs=[0,1].map(i=>pickFit(B,lim.b,i)).filter(Boolean);
  rows.push({label:'Ad set',parts:[...[...new Map(hs.map(x=>[x.t,x])).values()].map(x=>({k:'H',lim:lim.h,...x})),...[...new Map(bs.map(x=>[x.t,x])).values()].map(x=>({k:'D',lim:lim.b,...x}))]})}
 else for(let i=0;i<concepts;i++){const parts=[];
  if(lim.h||!('b' in lim)){const h=pickFit(H,lim.h,i);if(h)parts.push({k:fmt==='video'?'Super':'H',lim:lim.h,...h})}
  if(lim.b){const b=pickFit(B,lim.b,i);if(b)parts.push({k:'Body',lim:lim.b,...b})}
  const c=pickFit(CT,lim.cta,i);if(c&&fmt!=='document')parts.push({k:'CTA',lim:lim.cta,...c});
  if(parts.length)rows.push({label:'C'+(i+1),parts})}
 if(!rows.length)return {rows,note:'Add headlines and body copy in section 10.',text:'(no copy yet)'};
 const text=rows.map(r=>r.label+': '+r.parts.map(p=>`${p.k} "${p.t}"${p.over>0?` [over ${p.lim} by ${p.over}]`:''}`).join(' | ')).join('\n')+(note?'\n'+note:'');
 return {rows,note,text,flags:rows.reduce((a,r)=>a+r.parts.filter(p=>p.over>0).length,0)};
}

/* ==================== ENGINE ==================== */
function compute(tier){
 const T=TIERS[tier],total=+S.budgets[T]||0;
 const mkts=S.markets.filter(m=>m.on&&+m.weight>0),wsum=sum(mkts.map(m=>m.weight));
 const weeks=flightWeeks(),rounds=Math.max(1,Math.ceil(weeks/Math.max(1,+S.refresh[T]||8))),concepts=Math.max(1,+S.concepts[T]||1);
 const evMonths=S.moments.filter(x=>x.type==='event'&&x.month);
 const lines=[];
 for(const m of mkts){
  const mb=total*m.weight/wsum;
  const plsIn=c=>activePl(c,tier).filter(p=>unitsFor(p,m).length);
  const elig=CH.filter(c=>S.channels[c.id]?.on&&+S.channels[c.id].weight>0&&eligible(c,m)&&plsIn(c).length);
  const cw=elig.map(c=>(+S.channels[c.id].weight)*(c.boost?.[m.id]||1)),cws=sum(cw);
  elig.forEach((c,i)=>{const cb=mb*cw[i]/cws,pls=plsIn(c),ps=sum(pls.map(p=>p.share));
   pls.forEach(p=>{const b=cb*p.share/ps,rate=rateOf(p),units=unitsFor(p,m);
    let qty,qu;if(p.buy==='Flat'){qty=Math.floor(b/rate);qu=p.unit||'units'}else{qty=p.buy==='CPM'?b/rate*1000:b/rate;qu=BUYUNIT[p.buy]}
    const variants=sum(units.map(u=>variantsOf(u).length));
    const lead=Math.max(...units.map(u=>UNITS[u].lead));
    const ini=iniOf(p);
    const flight=c.burst==='events'&&evMonths.length?evMonths.map(e=>`${e.name} (${monthLabel(e.month)})`).join('; '):`${fmtD(parseD(S.start))} – ${fmtD(parseD(S.end))}`;
    lines.push({tier,c,p,m,budget:b,rate,qty,qu,units,variants,concepts,rounds,lead,ini,flight,
     group:c.group,channel:c.name,placement:p.name,publisher:c.pub?c.pub(m):c.name,market:m.name,lang:m.lang,
     audience:personaText(c),aud:personaShort(c),targeting:p.tgt,stage:p.stage,kpi:p.kpi,
     due:isoD(new Date(parseD(S.start)-lead*864e5)),under:p.buy==='Flat'&&qty<1});
   });});
 }
 lines.forEach((l,i)=>l.id='L'+String(i+1).padStart(3,'0'));
 // flighting
 const months=monthsList();
 const flightRows=[];const byCh={};lines.forEach(l=>{(byCh[l.c.id]=byCh[l.c.id]||{c:l.c,b:0}).b+=l.budget});
 for(const k in byCh){const {c,b}=byCh[k];
  let w=months.map(mo=>{if(c.burst==='events')return evMonths.length?evMonths.filter(e=>e.month===mo).length:1;
   const here=S.moments.filter(x=>x.month===mo&&x.type!=='event').length;
   const prev=S.moments.filter(x=>x.type!=='event'&&x.month&&nextMonth(x.month)===mo).length;return 1+1.0*here+0.5*prev});
  if(sum(w)===0)w=months.map(()=>1);const ws=sum(w);
  flightRows.push({c,total:b,months:months.map((mo,i)=>b*w[i]/ws)});}
 // creative deliverables, de-duplicated across markets that share a language
 const del={};lines.forEach(l=>l.units.forEach(u=>{const k=l.p.id+'|'+u+'|'+l.lang;
  if(!del[k])del[k]={channel:l.channel,placement:l.placement,unit:u,lang:l.lang,markets:new Set(),concepts,variants:variantsOf(u).length,rounds,lead:UNITS[u].lead};
  del[k].markets.add(l.market)}));
 const deliverables=Object.values(del).map(d=>({...d,markets:[...d.markets].join(', '),files:d.concepts*d.variants*d.rounds,due:isoD(new Date(parseD(S.start)-d.lead*864e5))}));
 // MVP BOM: group every unit variant on every line into creative masters (same format + aspect ratio, or same unit)
 const ms={},lens=videoLengths();
 lines.forEach(l=>{l.bom=new Set();l.units.forEach(u=>variantsOf(u).forEach(v=>{const vi=vinfo(u,v);
  const key=vi.logo?'static|logo':(['static','video'].includes(vi.fmt)&&vi.ratio)?vi.fmt+'|'+vi.ratio:(vi.fmt==='display'&&vi.size)?'display|'+vi.size:vi.fmt+'|'+u;
  const M=ms[key]=ms[key]||{key,fmt:vi.fmt,ratio:vi.ratio,logo:vi.logo,unit:u,units:new Set(),sizes:{},langs:new Set(),lines:new Set(),pls:new Set(),chs:new Set(),mk:new Set(),budget:0,lead:0,best:null,iniB:{}};
  M.units.add(u);const ii=S.initiatives[l.p.ini]?l.p.ini:0;M.iniB[ii]=(M.iniB[ii]||0)+l.budget;
  M.sizes[UNITS[u].platform+' '+UNITS[u].name+(vi.size?' '+vi.size:'')]=1;if(!M.best||vi.area>M.best.area)M.best=vi;
  M.langs.add(l.lang);M.pls.add(l.channel+' · '+l.placement);M.chs.add(l.channel);M.mk.add(l.market);M.lead=Math.max(M.lead,UNITS[u].lead);
  if(!M.lines.has(l.id)){M.lines.add(l.id);M.budget+=l.budget}l.bom.add(key)}))});
 const order=['video','static','display','document','text','messaging','social_post','article','audio','event'];
 const masters=Object.values(ms).sort((a,b)=>order.indexOf(a.fmt)-order.indexOf(b.fmt)||b.lines.size-a.lines.size).map((M,i)=>{
  const id='B'+String(i+1).padStart(2,'0');const nL=M.fmt==='video'?lens.length:1;const adapt=Object.keys(M.sizes).length;
  const name=M.logo?'Logo lockups':(['static','video'].includes(M.fmt)&&M.ratio)?`${FMTNAME[M.fmt]} · ${M.ratio}`:M.fmt==='display'&&M.best.size?`Display banner · ${M.best.size}`:`${UNITS[M.unit].platform} ${UNITS[M.unit].name}`;
  const masterFiles=concepts*rounds*M.langs.size*nL;
  const LOCAL=/^(wc_|bd_|nv_)/,us=[...M.units],usE=us.filter(u=>!LOCAL.test(u));const lim={};(usE.length?usE:us).forEach(u=>{const L=LIMS[u]||{};for(const k in L)lim[k]=Math.min(lim[k]??1e9,L[k])});
  const ini=+Object.entries(M.iniB).sort((a,b)=>b[1]-a[1])[0]?.[0]||0;
  const ad=adCopy({fmt:M.fmt,logo:M.logo,lim,ini,concepts,langs:[...M.langs]});
  return {...M,id,name,nL,adapt,masterFiles,ad,iniName:S.initiatives[ini]?.name||'—',units:[...M.units],totalFiles:masterFiles*adapt,lines:[...M.lines],langs:[...M.langs],pls:[...M.pls],chs:[...M.chs],mk:[...M.mk],due:isoD(new Date(parseD(S.start)-M.lead*864e5)),
   master:M.best.size||'—'}});
 const keyToId=Object.fromEntries(masters.map(m=>[m.key,m.id]));
 lines.forEach(l=>{l.bomIds=[...l.bom].map(k=>keyToId[k]).sort()});
 return {tier,total,lines,months,flightRows,deliverables,rounds,concepts,masters,lens};
}
function nextMonth(k){let [y,m]=k.split('-').map(Number);m++;if(m>12){m=1;y++}return `${y}-${String(m).padStart(2,'0')}`}

/* ==================== TABLE DEFINITIONS (shared by UI + exports) ==================== */
function bomTable(R){
 const cols0=[['Line','id'],['Version','ver'],['Initiative','ini'],['Message pillar','pillar'],['Funnel stage','stage'],['Channel group','group'],['Channel','channel'],['Placement','placement'],['Platform / publisher','publisher'],['Market','market'],['Language','lang'],['Audience','audience'],['Targeting','targeting'],['Ad units','unitsTxt'],['Sizes / specs','sizes'],['Buy type','buy'],['Rate','rateTxt'],['Budget','budget'],['Est. delivery','qty'],['Delivery unit','qu'],['Flight','flight'],['KPI','kpi'],['Creative (concepts × sizes × rounds)','creative'],['Creative due','due'],['BOM items','bomIds']];
 const cols=cols0;
 const rows=R.lines.map(l=>({id:l.id,ver:TIERNAME[l.tier],ini:l.ini.name,pillar:l.ini.pillar,stage:l.stage,group:l.group,channel:l.channel,placement:l.placement,publisher:l.publisher,market:l.market,lang:l.lang,audience:l.audience,targeting:l.targeting,
  unitsTxt:l.units.map(u=>UNITS[u].platform+' '+UNITS[u].name).join(' + '),sizes:l.units.flatMap(u=>variantsOf(u)).join(' | '),buy:l.p.buy,rateTxt:rateFmt(l.rate,l.p.buy)+(l.p.buy==='Flat'?' per '+(l.p.unit||'unit').replace(/s$/,''):l.p.buy==='CPM'?' CPM':''),
  aud:l.aud,budget:Math.round(l.budget),qty:Math.round(l.qty),qu:l.qu,flight:l.flight,kpi:l.kpi,creative:`${l.concepts} × ${l.variants} × ${l.rounds}`,due:l.due,bomIds:l.bomIds.join(', ')}));
 return {name:'Line Items',cols,rows};
}
function mvpTable(R){
 const cols=[['BOM item','id'],['Format','fmtName'],['Creative master','name'],['Ad copy','adTxt'],['Lead initiative','iniName'],['Media lines covered','linesTxt'],['# lines','nLines'],['Master size','master'],['Languages','langsTxt'],['Concepts','concepts'],['Refresh rounds','rounds'],['Video cuts','cuts'],['Master files','masterFiles'],['Platform resizes','adapt'],['Total files incl. resizes','totalFiles'],['Platform adaptations','adaptTxt'],['Channels','chsTxt'],['Markets','mkTxt'],['Media budget on these lines','budget'],['First due','due']];
 const rows=R.masters.map(m=>({id:m.id,fmtName:FMTNAME[m.fmt]||m.fmt,name:m.name,adTxt:m.ad.text,iniName:m.iniName,master:m.master,langsTxt:m.langs.join(', '),concepts:R.concepts,rounds:R.rounds,cuts:m.fmt==='video'?R.lens.join(', '):'—',masterFiles:m.masterFiles,adapt:m.adapt,totalFiles:m.totalFiles,
  adaptTxt:Object.keys(m.sizes).join('; '),chsTxt:m.chs.join(', '),mkTxt:m.mk.join(', '),linesTxt:m.lines.join(', '),nLines:m.lines.length,budget:Math.round(m.budget),due:m.due}));
 return {name:'BOM (MVP)',cols,rows};
}
const slugU=s=>String(s||'').toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g,'_').replace(/^_|_$/g,'');
const code=s=>String(s||'').toUpperCase().replace(/[^A-Z0-9]+/g,'').slice(0,6)||'X';
function pixelTable(R){
 const used=CH.filter(c=>R.lines.some(l=>l.c.id===c.id));
 const cols=[['Channel','channel'],['Tag / pixel','tag'],['Conversion events','events'],['Click IDs & URL parameters','click'],['Audiences, verification & notes','extra'],['Markets','mk'],['Lines','n']];
 const rows=used.map(c=>{const t=TAGS[c.id]||{},ls=R.lines.filter(l=>l.c.id===c.id);return{channel:c.name,tag:t.tag,events:t.events,click:t.click,extra:t.extra,mk:[...new Set(ls.map(l=>l.market))].join(', '),n:ls.length}});
 return {name:'Tagging - Pixels',cols,rows};
}
function utmTable(R){
 const base=(S.landing||'https://example.com/').trim(),camp=slugU(S.name)+'_'+TIERS[R.tier];
 const cols=[['Line','id'],['Channel','channel'],['Placement','placement'],['Market','market'],['Lang','lang'],['BOM items','bom'],['Files to traffic','files'],['Ad copy','copy'],['Ad / placement name','adname'],['Pixel / tag','pixel'],['utm_source','src'],['utm_medium','med'],['utm_campaign','camp'],['utm_content','cont'],['utm_term','term'],['Tracked URL','url'],['Flight','flight'],['Creative due','due']];
 const idByKey=Object.fromEntries(R.masters.map(m=>[m.key,m]));
 const rows=R.lines.map(l=>{const src=UTM_SRC[l.c.id]||slugU(l.channel),med=UNITS[l.units[0]].medium,cont=slugU(l.id+'_'+l.p.id),term=slugU(l.m.id+'_'+l.lang);
  const q=`utm_source=${encodeURIComponent(src)}&utm_medium=${encodeURIComponent(med)}&utm_campaign=${encodeURIComponent(camp)}&utm_content=${encodeURIComponent(cont)}&utm_term=${encodeURIComponent(term)}`;
  const lim={};l.units.forEach(u=>{const L=LIMS[u]||{};for(const k in L)lim[k]=Math.min(lim[k]??1e9,L[k])});
  const ad=applyEdits(adCopy({fmt:UNITS[l.units[0]].fmt,lim,ini:S.initiatives[l.p.ini]?l.p.ini:0,concepts:l.concepts,langs:[l.lang]}),editKey(R.tier,l));
  const files=[...l.bom].map(k=>{const m=idByKey[k];return m?m.id+' '+m.name:''}).filter(Boolean).join('; ')+' → '+l.units.flatMap(u=>variantsOf(u).map(v=>UNITS[u].name+' '+v)).join(', ')+` (${l.concepts} concepts × ${l.rounds} rounds)`;
  return {id:l.id,channel:l.channel,placement:l.placement,market:l.market,lang:l.lang,bom:l.bomIds.join(', '),files,copy:ad.text,_ad:ad,pixel:(TAGS[l.c.id]||{}).tag||'',flight:l.flight,due:l.due,adname:[code(S.name),TIERS[R.tier].toUpperCase().slice(0,3),code(l.m.id),code(l.c.id),l.p.id.toUpperCase(),l.stage.slice(0,3).toUpperCase(),l.lang,l.id].join('_'),
   src,med,camp,cont,term,url:base+(base.includes('?')?'&':'?')+q}});
 return {name:'Agency trafficking sheet',cols,rows};
}
function specTable(R){
 const used={};R.lines.forEach(l=>l.units.forEach(u=>{(used[u]=used[u]||{pl:new Set(),mk:new Set(),lg:new Set()});used[u].pl.add(l.channel+' · '+l.placement);used[u].mk.add(l.market);used[u].lg.add(l.lang)}));
 const cols=[['Platform','platform'],['Ad unit','name'],['Sizes / aspect ratios','sizes'],['File types','files'],['Max file size','max'],['Length / duration','length'],['Copy limits','copy'],['Notes','notes'],['Used in','usedIn'],['Markets','mk'],['Languages','lg'],['Production lead (days)','lead'],['Confirm with platform','verify']];
 const rows=Object.keys(used).map(u=>{const s=UNITS[u];return{platform:s.platform,name:s.name,sizes:variantsOf(u).join(' | '),files:s.files,max:s.max,length:s.length,copy:s.copy.join(' | '),notes:s.notes,usedIn:[...used[u].pl].join('; '),mk:[...used[u].mk].join(', '),lg:[...used[u].lg].join(', '),lead:s.lead,verify:s.verify?'Yes':''}});
 return {name:'Spec Sheet',cols,rows,raw:Object.keys(used)};
}
function creativeTable(R){
 const cols=[['Channel','channel'],['Placement','placement'],['Ad unit','unitTxt'],['Language','lang'],['Markets served','markets'],['Concepts','concepts'],['Sizes','variants'],['Refresh rounds','rounds'],['Total files','files'],['First round due','due']];
 const rows=R.deliverables.map(d=>({...d,unitTxt:UNITS[d.unit].platform+' '+UNITS[d.unit].name}));
 return {name:'Creative Deliverables',cols,rows};
}
function flightTable(R){
 const cols=[['Channel','channel'],...R.months.map(m=>[monthLabel(m),m]),['Total','total']];
 const rows=R.flightRows.map(f=>{const o={channel:f.c.name,total:Math.round(f.total)};R.months.forEach((m,i)=>o[m]=Math.round(f.months[i]));return o});
 return {name:'Flighting',cols,rows};
}
function assumptionTable(R){
 const cols=[['Channel','channel'],['Placement','placement'],['First version','tier'],['Buy type','buy'],['Rate used','rate'],['Benchmark rate','bench'],['Share of channel %','share'],['Funnel stage','stage']];
 const rows=[];CH.forEach(c=>c.pl.forEach(p=>rows.push({channel:c.name,placement:p.name,tier:TIERNAME[p.min],buy:p.buy,rate:rateOf(p),bench:p.rate,share:p.share,stage:p.stage,_id:p.id})));
 return {name:'Assumptions',cols,rows};
}
function summaryRows(R){
 const agg=(key)=>{const o={};R.lines.forEach(l=>o[l[key]]=(o[l[key]]||0)+l.budget);return Object.entries(o).sort((a,b)=>b[1]-a[1])};
 return {byChannel:agg('channel'),byMarket:agg('market'),byStage:agg('stage'),byIni:(()=>{const o={};R.lines.forEach(l=>o[l.ini.name]=(o[l.ini.name]||0)+l.budget);return Object.entries(o).sort((a,b)=>b[1]-a[1])})()};
}
function totals(R){const t={imp:0,clk:0,views:0,leads:0};R.lines.forEach(l=>{if(l.p.buy==='CPM')t.imp+=l.qty;if(l.p.buy==='CPC')t.clk+=l.qty;if(l.p.buy==='CPV')t.views+=l.qty;if(l.p.buy==='CPL')t.leads+=l.qty});
 t.files=sum(R.masters.map(m=>m.masterFiles));t.masters=R.masters.length;t.channels=new Set(R.lines.map(l=>l.c.id)).size;t.placements=new Set(R.lines.map(l=>l.p.id)).size;t.markets=new Set(R.lines.map(l=>l.market)).size;t.lines=R.lines.length;t.budget=sum(R.lines.map(l=>l.budget));return t}

/* ==================== INPUT RENDERING ==================== */
function bindSimple(){
 const map=[['#in-name','name'],['#in-product','product'],['#in-brief','brief'],['#in-start','start'],['#in-end','end']];
 map.forEach(([sel,k])=>{const el=$(sel);el.value=S[k]||'';el.oninput=()=>{S[k]=el.value;if(k==='name')renderCopyInputs();changed()}});
 TIERS.forEach(t=>{[['#b-','budgets'],['#c-','concepts'],['#r-','refresh']].forEach(([p,k])=>{const el=$(p+t);el.value=S[k][t];el.oninput=()=>{S[k][t]=+el.value;changed()}})});
}
function renderCopyInputs(){
 const C=S.copy;while(C.ini.length<S.initiatives.length)C.ini.push({h:'',b:''});
 $('#cp-voice').value=C.voice||'';$('#cp-voice').oninput=e=>{C.voice=e.target.value;changed()};
 $('#cp-cta').value=C.ctas||'';$('#cp-cta').oninput=e=>{C.ctas=e.target.value;changed()};
 $('#cp-proof').value=C.proof||'';$('#cp-proof').oninput=e=>{C.proof=e.target.value;changed()};
 const stale=C.src&&C.src!==S.name,empty=!C.ini.some(q=>q&&(q.h||q.b));
 $('#cp-src').innerHTML=empty?'No copy yet for this brief. Press “Draft copy with Claude” or write it below.':stale?`<span class="chip flag">Out of date</span> This copy was written for “${esc(C.src)}”. Redraft it for the current brief.`:`Copy written for “${esc(C.src||S.name)}”.`;
 $('#cp-ini').innerHTML=S.initiatives.map((x,i)=>`<div class="li ini" style="grid-template-columns:1fr"><div class="eyebrow">Initiative ${i+1}</div><div class="note" style="margin-top:-4px">${esc(x.name||'Untitled')}</div>
  <label class="f">Headlines<textarea id="cp-h-${i}" rows="3">${esc(C.ini[i].h)}</textarea></label>
  <label class="f">Body copy<textarea id="cp-b-${i}" rows="3">${esc(C.ini[i].b)}</textarea></label></div>`).join('');
 S.initiatives.forEach((x,i)=>{$('#cp-h-'+i).oninput=e=>{C.ini[i].h=e.target.value;changed()};$('#cp-b-'+i).oninput=e=>{C.ini[i].b=e.target.value;changed()}});
}
function renderInputs(){
 bindSimple();renderCopyInputs();
 const uc={};Object.keys(UNITS).forEach(u=>UNITS[u].variants.forEach(v=>{const f=vinfo(u,v).fmt;(uc[f]=uc[f]||new Set()).add(UNITS[u].platform+' '+UNITS[u].name)}));
 $('#fmt-list').innerHTML=FORMATS.map(f=>`<div class="li per" title="${esc([...(uc[f.id]||[])].join(', '))}"><input type="checkbox" id="fm-${f.id}" ${fmtOn(f.id)?'checked':''} aria-label="Include ${esc(f.name)}"><label for="fm-${f.id}" style="display:flex;flex-direction:column;min-width:0"><span>${esc(f.name)} <span class="tierchip">${(uc[f.id]||new Set()).size} units</span></span><span class="note">${esc(f.note)}</span></label></div>`).join('');
 FORMATS.forEach(f=>{$('#fm-'+f.id).onchange=e=>{S.formats[f.id]={on:e.target.checked};changed()}});
 const vl=$('#in-vlen');vl.value=S.formats._video.lengths;vl.oninput=()=>{S.formats._video.lengths=vl.value;changed()};
 // markets
 $('#mkt-list').innerHTML=`<div class="li mkt note"><span></span><span>Market</span><span>Weight %</span><span>Lang</span><span></span></div>`+S.markets.map((m,i)=>`
  <div class="li mkt"><input type="checkbox" id="mk-on-${i}" ${m.on?'checked':''} aria-label="Include ${esc(m.name)}">
  <input type="text" id="mk-n-${i}" value="${esc(m.name)}" aria-label="Market name">
  <input type="number" id="mk-w-${i}" value="${m.weight}" min="0" max="100" aria-label="Weight">
  <input type="text" id="mk-l-${i}" value="${esc(m.lang)}" aria-label="Language" maxlength="5">
  <button class="x" data-i="${i}" aria-label="Remove market">×</button></div>`).join('');
 S.markets.forEach((m,i)=>{$(`#mk-on-${i}`).onchange=e=>{m.on=e.target.checked;changed()};$(`#mk-n-${i}`).oninput=e=>{m.name=e.target.value;changed()};$(`#mk-w-${i}`).oninput=e=>{m.weight=+e.target.value;changed()};$(`#mk-l-${i}`).oninput=e=>{m.lang=e.target.value.toUpperCase();changed()}});
 $('#mkt-list').querySelectorAll('.x').forEach(b=>b.onclick=()=>{S.markets.splice(+b.dataset.i,1);renderInputs();changed()});
 // personas
 $('#per-list').innerHTML=Object.entries(S.personas).map(([k,p])=>`<div class="li per"><input type="checkbox" id="pe-on-${k}" ${p.on?'checked':''} aria-label="Include persona"><input type="text" id="pe-l-${k}" value="${esc(p.label)}" aria-label="Persona label"></div>`).join('');
 Object.entries(S.personas).forEach(([k,p])=>{$(`#pe-on-${k}`).onchange=e=>{p.on=e.target.checked;changed()};$(`#pe-l-${k}`).oninput=e=>{p.label=e.target.value;changed()}});
 // initiatives
 $('#ini-list').innerHTML=S.initiatives.map((x,i)=>`<div class="li ini"><input type="text" id="in-n-${i}" value="${esc(x.name)}" aria-label="Initiative name">
  <select id="in-s-${i}" aria-label="Funnel stage">${Object.keys(STAGE).map(s=>`<option ${s===x.stage?'selected':''}>${s}</option>`).join('')}</select>
  <input class="full" type="text" id="in-p-${i}" value="${esc(x.pillar)}" aria-label="Message pillar" placeholder="Message pillar">
  <div class="full btns" style="justify-content:space-between"><span class="note">Initiative ${i+1}${[' · brand & awareness lines',' · cross-sell & conversion lines',' · data & technical lines'][i]||''}</span><button class="x" data-i="${i}" aria-label="Remove initiative">×</button></div></div>`).join('');
 S.initiatives.forEach((x,i)=>{$(`#in-n-${i}`).oninput=e=>{x.name=e.target.value;renderCopyInputs();changed()};$(`#in-s-${i}`).onchange=e=>{x.stage=e.target.value;changed()};$(`#in-p-${i}`).oninput=e=>{x.pillar=e.target.value;changed()}});
 $('#ini-list').querySelectorAll('.x').forEach(b=>b.onclick=()=>{S.initiatives.splice(+b.dataset.i,1);S.copy.ini.splice(+b.dataset.i,1);renderInputs();changed()});
 // moments
 $('#mom-list').innerHTML=S.moments.map((x,i)=>`<div class="li mom"><input class="full" type="text" id="mo-n-${i}" value="${esc(x.name)}" aria-label="Moment name">
  <select id="mo-t-${i}" aria-label="Type">${['launch','content','event'].map(t=>`<option value="${t}" ${t===x.type?'selected':''}>${t[0].toUpperCase()+t.slice(1)}</option>`).join('')}</select>
  <input type="month" id="mo-m-${i}" value="${esc(x.month)}" aria-label="Month">
  <div class="full btns" style="justify-content:flex-end"><button class="x" data-i="${i}" aria-label="Remove moment">×</button></div></div>`).join('');
 S.moments.forEach((x,i)=>{$(`#mo-n-${i}`).oninput=e=>{x.name=e.target.value;changed()};$(`#mo-t-${i}`).onchange=e=>{x.type=e.target.value;changed()};$(`#mo-m-${i}`).onchange=e=>{x.month=e.target.value;changed()}});
 $('#mom-list').querySelectorAll('.x').forEach(b=>b.onclick=()=>{S.moments.splice(+b.dataset.i,1);renderInputs();changed()});
 // channels
 let html='',g='';CH.forEach(c=>{if(c.group!==g){g=c.group;html+=`<div class="chgroup">${esc(g)}</div>`}
  const st=S.channels[c.id]=S.channels[c.id]||{on:true,weight:c.weight};const mn=Math.min(...c.pl.map(p=>p.min));
  html+=`<div class="li ch"><input type="checkbox" id="ch-on-${c.id}" ${st.on?'checked':''} aria-label="Include ${esc(c.name)}"><label for="ch-on-${c.id}" style="display:flex;gap:6px;align-items:center;min-width:0"><span>${esc(c.name)}</span><span class="tierchip">${'LSF'[mn]}+</span></label><input type="number" id="ch-w-${c.id}" value="${st.weight}" min="0" aria-label="Weight"></div>`});
 $('#ch-list').innerHTML=html;
 CH.forEach(c=>{$(`#ch-on-${c.id}`).onchange=e=>{S.channels[c.id].on=e.target.checked;changed()};$(`#ch-w-${c.id}`).oninput=e=>{S.channels[c.id].weight=+e.target.value;changed()}});
}
$('#add-mkt').onclick=()=>{S.markets.push({id:'M'+Date.now(),name:'New market',lang:'EN',on:true,weight:5});renderInputs();changed()};
$('#add-ini').onclick=()=>{S.initiatives.push({name:'New initiative',stage:'Consideration',pillar:''});renderInputs();changed()};
$('#add-mom').onclick=()=>{S.moments.push({name:'New moment',month:S.start.slice(0,7),type:'launch',ini:0});renderInputs();changed()};
$('#btn-reset').onclick=()=>{S=exampleState();renderInputs();changed();setStatus('#extract-status','Unity Acquire example reloaded.');$('#exampleBadge').hidden=false};

/* ==================== OUTPUT RENDERING ==================== */
let T_=null;function changed(){save();clearTimeout(T_);T_=setTimeout(renderOut,120)}
const TABS=[['summary','Summary'],['bom','BOM (MVP)'],['lines','Line items'],['spec','Spec Sheet for Creative'],['flight','Flighting'],['assump','Rates & assumptions'],['tagging','Spec Sheet & Tagging for Agency']];
function renderSeg(){
 $('#ver-seg').innerHTML=TIERNAME.map((n,i)=>`<button aria-pressed="${UI.tier===i}" data-t="${i}">${n}<span class="amt">${compact(+S.budgets[TIERS[i]]||0).replace(/^/,'$')}</span></button>`).join('')+`<button aria-pressed="${UI.tier===3}" data-t="3">Compare<span class="amt">all three</span></button>`;
 $('#ver-seg').querySelectorAll('button').forEach(b=>b.onclick=()=>{UI.tier=+b.dataset.t;save();renderOut()});
 $('#tabs').innerHTML=UI.tier===3?'':TABS.map(([k,n])=>`<button role="tab" aria-selected="${UI.tab===k}" data-k="${k}">${n}</button>`).join('');
 $('#tabs').hidden=UI.tier===3;
 $('#tabs').querySelectorAll('button').forEach(b=>b.onclick=()=>{UI.tab=b.dataset.k;save();renderOut()});
}
function barList(title,entries,total){
 const max=Math.max(1,...entries.map(e=>e[1]));
 return `<div class="bars"><h3>${esc(title)}</h3>${entries.map(([k,v])=>`<div class="brow" title="${esc(k)}: ${money(v)} (${(v/total*100).toFixed(1)}%)"><span class="lab">${esc(k)}</span><span class="track"><span class="fill" style="width:${(v/max*100).toFixed(1)}%;display:block"></span></span><span class="val">${(v/total*100).toFixed(0)}% · ${compact(v)}</span></div>`).join('')}</div>`;
}
function stageChip(s){return `<span class="chip ${STAGE[s]||''}">${esc(s)}</span>`}
function renderSummary(R){
 const t=totals(R),s=summaryRows(R);
 const flags=R.lines.filter(l=>l.under);
 return `<div class="panel" style="display:flex;flex-direction:column;gap:18px">
  <div><div class="eyebrow">${esc(TIERNAME[R.tier])} version · ${esc(S.name)}</div><h2 style="font-size:20px;margin-top:2px">${money(t.budget)} across ${t.channels} channels and ${t.markets} markets</h2>
  <div class="note">${esc(S.product)} · ${fmtD(parseD(S.start))} – ${fmtD(parseD(S.end))} · ${R.concepts} concepts per placement, refreshed ${R.rounds}× over the flight</div></div>
  <div class="tiles">
   <div class="tile"><span class="v">${t.lines}</span><span class="k">Media line items</span></div>
   <div class="tile"><span class="v">${compact(t.imp)}</span><span class="k">Est. impressions (CPM buys)</span></div>
   <div class="tile"><span class="v">${compact(t.clk)}</span><span class="k">Est. clicks (CPC buys)</span></div>
   <div class="tile"><span class="v">${compact(t.views)}</span><span class="k">Est. video views (CPV)</span></div>
   <div class="tile"><span class="v">${compact(t.leads)}</span><span class="k">Est. leads (CPL)</span></div>
   <div class="tile"><span class="v">${R.masters.length}</span><span class="k">BOM creative masters · ${t.files.toLocaleString()} files</span></div>
  </div>
  <div class="cols">${barList('Budget by channel',s.byChannel,t.budget)}${barList('Budget by market',s.byMarket,t.budget)}</div>
  <div class="cols">${barList('Budget by initiative',s.byIni,t.budget)}${barList('Budget by funnel stage',s.byStage,t.budget)}</div>
  ${flags.length?`<div class="note"><span class="chip flag">Check</span> ${flags.length} flat-fee line(s) get less than one unit at this budget: ${flags.map(l=>esc(l.placement+' · '+l.market)).join('; ')}. Raise the budget, lower the market weight, or switch the channel off there.</div>`:''}
  <div><h3 style="font-size:14px;margin-bottom:6px">Defaults this plan assumes</h3><ul class="assump">
   <li>The GTM doc has no paid media budget, so the three version budgets are planning placeholders. Replace them with your real numbers.</li>
   <li>Rates are 2026 B2B planning benchmarks, not quotes. Override any of them on the Rates &amp; assumptions tab.</li>
   <li>Market budget is set first from the weights; each market then splits across the channels available there (LinkedIn, Google, X and YouTube are off in China, where WeChat and Baidu take over; Naver runs in Korea; X gets extra weight in Japan).</li>
   <li>Flighting runs always-on across the flight, with extra weight in launch months and the month after. Event amplification only spends in event months.</li>
   <li>The BOM is the MVP: one master per format and aspect ratio, made once per language (North America and EMEA share English) and resized for each platform.</li>
  </ul></div></div>`;
}
function renderTable(tb,{group=null,numeric=[],money_=[],wrapCols=[],totalCols=[]}={}){
 const cols=tb.cols;
 const head=`<tr>${cols.map(([l,k])=>`<th class="${numeric.includes(k)||money_.includes(k)?'n':''}">${esc(l)}</th>`).join('')}</tr>`;
 const cell=(r,k)=>{const v=r[k];if(money_.includes(k))return `<td class="n">${money(v)}</td>`;if(numeric.includes(k))return `<td class="n">${(+v||0).toLocaleString()}</td>`;
  if(k==='stage')return `<td>${stageChip(v)}</td>`;return `<td class="${wrapCols.includes(k)?'':'m'}" ${wrapCols.includes(k)?'style="min-width:220px"':''}>${esc(v)}</td>`};
 let body='';
 if(group){const gs={};tb.rows.forEach(r=>(gs[r[group]]=gs[r[group]]||[]).push(r));
  for(const [g,rs] of Object.entries(gs)){const sub=totalCols.map(k=>sum(rs.map(r=>r[k])));
   body+=`<tr class="grp"><td colspan="${cols.length}">${esc(g)} <span class="sub2" style="font-weight:400">· ${rs.length} lines${totalCols.length?' · '+money(sub[0]):''}</span></td></tr>`+rs.map(r=>`<tr>${cols.map(([,k])=>cell(r,k)).join('')}</tr>`).join('')}}
 else body=tb.rows.map(r=>`<tr>${cols.map(([,k])=>cell(r,k)).join('')}</tr>`).join('');
 if(totalCols.length){body+=`<tr class="tot">${cols.map(([,k],i)=>i===0?'<td>Total</td>':totalCols.includes(k)?`<td class="n">${money_.includes(k)?money(sum(tb.rows.map(r=>r[k]))):sum(tb.rows.map(r=>r[k])).toLocaleString()}</td>`:'<td></td>').join('')}</tr>`}
 return `<div class="tscroll"><table><thead>${head}</thead><tbody>${body}</tbody></table></div>`;
}
function renderMVP(R){
 const tb=mvpTable(R),t=totals(R);
 const covered=new Set(R.masters.flatMap(m=>m.lines)).size;
 const gs={};tb.rows.forEach(r=>(gs[r.fmtName]=gs[r.fmtName]||[]).push(r));
 return `<div class="toolbar"><span class="note">The minimum creative set: every ad unit on every media line is grouped into one master per format and aspect ratio (or per unit for copy-led formats). Resize each master for the platforms listed.</span>
  <span class="chip ${covered===t.lines?'aw':'flag'}">${covered} of ${t.lines} media lines covered</span></div>
 <div class="tscroll"><table><thead><tr><th>BOM</th><th>Creative master</th><th>Ad copy</th><th>Media lines covered</th><th>Master size</th><th>Lang</th><th class="n">Concepts × rounds${R.lens.length>1?' × cuts':''}</th><th class="n">Master files</th><th class="n">Incl. resizes</th><th>Platform adaptations</th><th class="n">Budget on lines</th><th>First due</th></tr></thead><tbody>
 ${Object.entries(gs).map(([g,rs])=>`<tr class="grp"><td colspan="12">${esc(g)} <span class="sub2" style="font-weight:400">· ${rs.length} masters · ${sum(rs.map(r=>r.masterFiles)).toLocaleString()} master files</span></td></tr>`+rs.map(r=>`<tr>
  <td class="m"><strong>${r.id}</strong></td><td style="min-width:170px"><strong>${esc(r.name)}</strong><div class="sub2">${esc(r.chsTxt)}</div></td>
  <td style="min-width:320px">${adCell(R.masters.find(m=>m.id===r.id).ad)}</td><td class="m" style="min-width:220px"><span class="chip">${r.nLines} lines</span> ${esc(r.linesTxt)}</td><td class="m">${esc(r.master)}</td><td class="m" style="white-space:nowrap">${esc(r.langsTxt)}</td>
  <td class="n">${r.concepts} × ${r.rounds}${r.cuts!=='—'?' × '+R.lens.length:''}</td><td class="n">${r.masterFiles.toLocaleString()}</td><td class="n">${r.totalFiles.toLocaleString()}</td>
  <td class="sub2" style="min-width:230px">${Object.keys(R.masters.find(m=>m.id===r.id).sizes).map(esc).join('<br>')}</td><td class="n">${money(r.budget)}</td><td class="m">${r.due}</td></tr>`).join('')).join('')}
 <tr class="tot"><td>Total</td><td>${tb.rows.length} masters</td><td>${(()=>{const f=sum(R.masters.map(m=>m.ad.flags||0));return f?`<span class="chip flag">${f} copy lines over limit</span>`:'<span class="chip aw">All copy within limits</span>'})()}</td><td>${covered} / ${t.lines} lines</td><td></td><td></td><td></td><td class="n">${sum(tb.rows.map(r=>r.masterFiles)).toLocaleString()}</td><td class="n">${sum(tb.rows.map(r=>r.totalFiles)).toLocaleString()}</td><td></td><td class="n">${money(t.budget)}</td><td></td></tr>
 </tbody></table></div>
 <div class="note" style="margin-top:8px">“Budget on lines” is the media budget of the lines that use a master. A line with several units counts toward each of them, so this column does not add up to the plan total.${R.lens.length>1?` Video masters are cut into ${R.lens.length} lengths (${esc(R.lens.join(', '))}).`:''}</div>`;
}
// agency edits to a line's ad copy, keyed by version + placement + market so they survive renumbering
const editKey=(tier,l)=>TIERS[tier]+'|'+l.p.id+'|'+l.m.id;
function applyEdits(ad,lk){
 const E=(S.copyEdits||{})[lk];ad.lk=lk;if(!E||!ad.rows.length)return ad;
 ad.rows.forEach(r=>r.parts.forEach((p,j)=>{const v=E[r.label+'|'+j];if(v!=null){p.t=v;p.edited=true;p.over=p.lim?Math.max(0,v.length-p.lim):0}}));
 ad.text=ad.rows.map(r=>r.label+': '+r.parts.map(p=>`${p.k} "${p.t}"${p.over>0?` [over ${p.lim} by ${p.over}]`:''}`).join(' | ')).join('\n')+(ad.note?'\n'+ad.note:'');
 ad.flags=ad.rows.reduce((a,r)=>a+r.parts.filter(p=>p.over>0).length,0);ad.edited=true;return ad;
}
function adCellEdit(ad){
 if(!ad.rows.length)return `<span class="sub2">${esc(ad.note)}</span>`;
 return `<div style="display:flex;flex-direction:column;gap:6px">${ad.rows.map(r=>`<div><span class="tierchip">${esc(r.label)}</span>${r.parts.map((p,j)=>{const long=(p.lim||0)>90||p.t.length>90;
  const attrs=`class="cp-edit" data-lk="${esc(ad.lk)}" data-key="${esc(r.label+'|'+j)}" data-lim="${p.lim||''}" aria-label="${esc(r.label+' '+p.k)}"`;
  return `<div style="margin-top:4px"><div class="sub2" style="display:flex;justify-content:space-between;gap:8px"><span>${esc(p.k)}${p.edited?' · edited':''}</span><span class="cp-count ${p.over>0?'over':''}">${p.lim?`${p.t.length}/${p.lim}`:p.t.length+' chars'}</span></div>
   ${long?`<textarea ${attrs} rows="2">${esc(p.t)}</textarea>`:`<input type="text" ${attrs} value="${esc(p.t)}">`}</div>`}).join('')}</div>`).join('')}
  ${ad.edited?`<button class="btn sm ghost cp-reset" data-lk="${esc(ad.lk)}">Reset to bank copy</button>`:''}${ad.note?`<div class="sub2">${esc(ad.note)}</div>`:''}</div>`;
}
function adCell(ad){
 if(!ad.rows.length)return `<span class="sub2">${esc(ad.note)}</span>`;
 return `<div style="display:flex;flex-direction:column;gap:6px">${ad.rows.map(r=>`<div><span class="tierchip">${esc(r.label)}</span> ${r.parts.map(p=>`<div style="margin-top:2px"><span class="sub2">${esc(p.k)}${p.lim?` (${p.t.length}/${p.lim})`:''}:</span> ${esc(p.t)}${p.over>0?` <span class="chip flag">over by ${p.over}</span>`:''}</div>`).join('')}</div>`).join('')}${ad.note?`<div class="sub2">${esc(ad.note)}</div>`:''}</div>`;
}
function renderTagging(R){
 const px=pixelTable(R),ut=utmTable(R);
 return `<div class="panel" style="display:flex;flex-direction:column;gap:14px"><div class="toolbar" style="margin:0"><div><div class="eyebrow">Spec sheet &amp; tagging for agency</div><h2 style="font-size:18px">Agency trafficking sheet: every line</h2><div class="note">What each media line needs: its BOM creative masters, the exact files, the ad copy fitted to that placement's limits (edit any line here to trim it; counters turn amber when over), the pixel, the ad name and the tracked URL. utm_content carries the line ID, so every click maps back to the BOM. Split trade and creator lines per publisher once IOs are signed.</div></div>
   <label class="f" style="min-width:260px">Landing page URL<input type="text" id="in-landing" value="${esc(S.landing)}"></label></div>
  <div class="tscroll"><table><thead><tr><th>Line</th><th>Placement · market</th><th>BOM items</th><th>Files to traffic</th><th>Ad copy</th><th>Ad name</th><th>UTMs</th><th>Tracked URL</th><th>Due</th></tr></thead><tbody>
  ${ut.rows.map(r=>`<tr><td class="m"><strong>${r.id}</strong></td><td style="min-width:200px">${esc(r.placement)}<div class="sub2">${esc(r.channel)} · ${esc(r.market)} · ${esc(r.lang)}</div></td>
   <td class="m" style="white-space:nowrap">${esc(r.bom)}</td><td class="sub2" style="min-width:240px">${esc(r.files)}</td><td style="min-width:420px">${adCellEdit(r._ad)}</td>
   <td class="m" style="min-width:200px;word-break:break-all">${esc(r.adname)}</td>
   <td class="m" style="min-width:200px">source=${esc(r.src)}<br>medium=${esc(r.med)}<br>campaign=${esc(r.camp)}<br>content=${esc(r.cont)}<br>term=${esc(r.term)}</td>
   <td class="m" style="min-width:260px;word-break:break-all">${esc(r.url)}</td><td class="m">${esc(r.due)}</td></tr>`).join('')}
  </tbody></table></div>
  <div style="margin-top:10px"><h2 style="font-size:18px">Pixels &amp; conversion tracking by channel</h2>
  <div class="note">Install site-wide tags before launch and gate them behind your consent manager (GDPR in EMEA, PIPL in China, PIPA in Korea). Fire the same conversion events on every channel so results compare.</div></div>
  ${renderTable(px,{numeric:['n'],wrapCols:['tag','events','click','extra','mk']})}</div>`;
}
function renderBOM(R){
 const tb=bomTable(R);
 const all=Object.fromEntries([...tb.cols,['Audience','aud']].map(c=>[c[1],c]));
 const view={...tb,cols:['id','placement','publisher','market','aud','stage','unitsTxt','sizes','buy','rateTxt','budget','qty','qu','flight','kpi','bomIds'].map(k=>all[k])};
 const gk={channel:'channel',market:'market',initiative:'ini',stage:'stage'}[UI.group];
 return `<div class="toolbar"><div class="left"><label class="note" for="grp">Group by</label><select id="grp">${[['channel','Channel'],['market','Market'],['initiative','Initiative'],['stage','Funnel stage']].map(([v,n])=>`<option value="${v}" ${UI.group===v?'selected':''}>${n}</option>`).join('')}</select></div>
  <span class="note">Exports include every column: initiative, pillar, targeting, language and creative due dates.</span></div>
  ${renderTable(view,{group:gk,numeric:['qty'],money_:['budget'],wrapCols:['placement','aud','sizes','flight','kpi','publisher'],totalCols:['budget']})}`;
}
function renderSpec(R){
 const tb=specTable(R);
 return `<div class="toolbar"><span class="note">${tb.rows.length} ad units in the ${TIERNAME[R.tier]} version. Units marked “Confirm” change often or vary by publisher; check the current platform spec before production.</span></div>
 <div class="tscroll"><table><thead><tr><th>Ad unit</th><th>Sizes / ratios</th><th>Files · max size · length</th><th>Copy limits</th><th>Notes</th><th>Used in</th><th class="n">Lead (days)</th></tr></thead><tbody>
 ${tb.raw.map((u,i)=>{const s=UNITS[u],r=tb.rows[i];return `<tr><td style="min-width:160px"><strong>${esc(s.name)}</strong><div class="sub2">${esc(s.platform)}</div>${s.verify?'<span class="chip flag">Confirm</span>':''}</td>
  <td class="m" style="min-width:150px"><ul class="spec-list">${variantsOf(u).map(v=>`<li>${esc(v)}</li>`).join('')}</ul></td>
  <td style="min-width:160px">${esc(s.files)}<div class="sub2">${esc(s.max)}${s.length!=='—'?' · '+esc(s.length):''}</div></td>
  <td style="min-width:220px"><ul class="spec-list">${s.copy.map(v=>`<li>${esc(v)}</li>`).join('')}</ul></td>
  <td style="min-width:180px" class="sub2">${esc(s.notes)}</td>
  <td style="min-width:200px" class="sub2">${esc(r.usedIn)}<div>${esc(r.lg)}</div></td><td class="n">${s.lead}</td></tr>`}).join('')}
 </tbody></table></div>`;
}
function renderCreative(R){
 const tb=creativeTable(R);
 return `<div class="toolbar"><span class="note">Files = concepts × sizes × refresh rounds, counted once per language. First round is due before the flight starts, using each unit's production lead time.</span></div>
 ${renderTable(tb,{group:'lang',numeric:['concepts','variants','rounds','files'],wrapCols:['placement','markets'],totalCols:['files']})}`;
}
function renderFlight(R){
 const tb=flightTable(R);const max=Math.max(1,...R.flightRows.flatMap(f=>f.months));
 const mm={};S.moments.forEach(x=>{(mm[x.month]=mm[x.month]||[]).push(x)});
 return `<div class="toolbar"><span class="note">Monthly spend by channel. Darker cells carry more budget. Moments are listed under each month.</span></div>
 <div class="tscroll"><table class="heat"><thead><tr><th>Channel</th>${R.months.map(m=>`<th class="n">${monthLabel(m)}</th>`).join('')}<th class="n">Total</th></tr>
 <tr><td class="sub2">Moments</td>${R.months.map(m=>`<td class="sub2" style="min-width:92px;font-size:10.5px">${(mm[m]||[]).map(x=>esc(x.name)).join('<br>')}</td>`).join('')}<td></td></tr></thead><tbody>
 ${R.flightRows.map(f=>`<tr><td style="white-space:nowrap">${esc(f.c.name)}</td>${f.months.map(v=>`<td class="h" style="background:color-mix(in srgb,var(--heat1) ${(v/max*70).toFixed(0)}%,var(--heat0));color:${v/max>.55?'var(--accent-ink)':'var(--ink)'}">${v>0?compact(v):'<span class="sub2">—</span>'}</td>`).join('')}<td class="n">${money(f.total)}</td></tr>`).join('')}
 <tr class="tot"><td>Total</td>${R.months.map((m,i)=>`<td class="n">${compact(sum(R.flightRows.map(f=>f.months[i])))}</td>`).join('')}<td class="n">${money(sum(R.flightRows.map(f=>f.total)))}</td></tr>
 </tbody></table></div>`;
}
function renderAssump(R){
 const tb=assumptionTable(R);
 return `<div class="toolbar"><span class="note">Edit any rate to replace the benchmark with your rate card. Changes apply to all three versions.</span><button class="btn sm" id="rates-reset">Reset to benchmarks</button></div>
 <div class="tscroll"><table><thead><tr><th>Channel</th><th>Placement</th><th>First version</th><th>Buy</th><th class="n">Rate</th><th class="n">Benchmark</th><th class="n">Share of channel</th><th>Stage</th></tr></thead><tbody>
 ${tb.rows.map(r=>`<tr><td>${esc(r.channel)}</td><td>${esc(r.placement)}</td><td><span class="tierchip">${esc(r.tier)}</span></td><td class="m">${esc(r.buy)}${r.buy==='Flat'?' / '+esc((PLMAP[r._id].unit||'unit').replace(/s$/,'')):''}</td>
  <td class="n"><input class="rate" type="number" step="any" min="0" id="rt-${r._id}" value="${r.rate}" aria-label="Rate for ${esc(r.placement)}"></td><td class="n">${rateFmt(r.bench,r.buy)}</td><td class="n">${r.share}%</td><td>${stageChip(r.stage)}</td></tr>`).join('')}
 </tbody></table></div>`;
}
function renderCompare(){
 const Rs=[0,1,2].map(compute),Ts=Rs.map(totals);
 const metrics=[['Budget',t=>money(t.budget)],['Channels',t=>t.channels],['Placements',t=>t.placements],['Markets',t=>t.markets],['BOM line items',t=>t.lines],['Est. impressions',t=>compact(t.imp)],['Est. clicks',t=>compact(t.clk)],['Est. video views',t=>compact(t.views)],['Est. leads',t=>compact(t.leads)],['BOM creative masters',t=>t.masters],['Master files',t=>t.files.toLocaleString()]];
 const chs=CH.filter(c=>Rs.some(R=>R.lines.some(l=>l.c.id===c.id)));
 const chB=(R,c)=>sum(R.lines.filter(l=>l.c.id===c.id).map(l=>l.budget));
 return `<div class="panel" style="display:flex;flex-direction:column;gap:16px"><div><div class="eyebrow">Side by side</div><h2 style="font-size:20px">Lean vs Standard vs Full</h2>
 <div class="note">Lean runs the always-on core (LinkedIn, search, trade newsletters, China and Korea local platforms). Standard adds video, X, ABM, retargeting, lead gen and events. Full adds Reddit, Shorts, conquest search, conversation ads, sponsored articles and podcasts.</div></div>
 <div class="tscroll"><table><thead><tr><th>Metric</th>${TIERNAME.map(n=>`<th class="n">${n}</th>`).join('')}</tr></thead><tbody>${metrics.map(([n,f])=>`<tr><td>${n}</td>${Ts.map(t=>`<td class="n">${f(t)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>
 <div class="tscroll"><table><thead><tr><th>Channel budget</th>${TIERNAME.map(n=>`<th class="n">${n}</th>`).join('')}</tr></thead><tbody>${chs.map(c=>`<tr><td>${esc(c.name)}</td>${Rs.map(R=>{const v=chB(R,c);return `<td class="n">${v?money(v):'<span class="sub2">—</span>'}</td>`}).join('')}</tr>`).join('')}</tbody></table></div></div>`;
}
function renderOut(){
 renderSeg();
 const v=$('#view');
 if(UI.tier===3){v.innerHTML=renderCompare();$('#x-csv').disabled=true;return}
 $('#x-csv').disabled=false;
 const R=compute(UI.tier);
 if(!TABS.some(t=>t[0]===UI.tab))UI.tab='summary';
 v.innerHTML={summary:renderSummary,bom:renderMVP,lines:renderBOM,spec:renderSpec,flight:renderFlight,assump:renderAssump,tagging:renderTagging}[UI.tab](R);
 const ld=$('#in-landing');if(ld)ld.onchange=()=>{S.landing=ld.value;save();renderOut()};
 v.querySelectorAll('.cp-edit').forEach(el=>{const lim=+el.dataset.lim||0;const mark=()=>{const n=el.value.length,c=el.parentElement.querySelector('.cp-count');c.textContent=lim?n+'/'+lim:n+' chars';const o=lim&&n>lim;c.classList.toggle('over',!!o);el.classList.toggle('over',!!o)};mark();
  el.oninput=()=>{S.copyEdits=S.copyEdits||{};(S.copyEdits[el.dataset.lk]=S.copyEdits[el.dataset.lk]||{})[el.dataset.key]=el.value;mark();save()}});
 v.querySelectorAll('.cp-reset').forEach(b=>b.onclick=()=>{if(S.copyEdits)delete S.copyEdits[b.dataset.lk];save();renderOut()});
 const g=$('#grp');if(g)g.onchange=()=>{UI.group=g.value;save();renderOut()};
 if(UI.tab==='assump'){CH.forEach(c=>c.pl.forEach(p=>{const el=$('#rt-'+p.id);el.onchange=()=>{S.rates[p.id]=el.value===''?null:+el.value;save()}}));
  $('#rates-reset').onclick=()=>{S.rates={};save();renderOut()}}
}

/* ==================== EXPORTS ==================== */
function tableToAOA(tb){return [tb.cols.map(c=>c[0]),...tb.rows.map(r=>tb.cols.map(([,k])=>r[k]))]}
function summaryAOA(R){const t=totals(R),s=summaryRows(R);const a=[[S.name],[S.product],['Version',TIERNAME[R.tier]],['Flight',S.start+' to '+S.end],['Total budget',Math.round(t.budget)],['Line items',t.lines],['Est. impressions',Math.round(t.imp)],['Est. clicks',Math.round(t.clk)],['Est. video views',Math.round(t.views)],['Est. leads',Math.round(t.leads)],['BOM creative masters',R.masters.length],['Master files',t.files],[]];
 [['By channel',s.byChannel],['By market',s.byMarket],['By initiative',s.byIni],['By funnel stage',s.byStage]].forEach(([n,e])=>{a.push([n,'Budget','Share']);e.forEach(([k,v])=>a.push([k,Math.round(v),+(v/t.budget).toFixed(4)]));a.push([])});return a}
function addSheet(wb,name,aoa,widths){const ws=XLSX.utils.aoa_to_sheet(aoa);if(widths)ws['!cols']=widths.map(w=>({wch:w}));XLSX.utils.book_append_sheet(wb,ws,name.slice(0,31))}
function workbookFor(tiers){
 const wb=XLSX.utils.book_new();
 const many=tiers.length>1;
 if(many){const Rs=[0,1,2].map(compute),Ts=Rs.map(totals);addSheet(wb,'Compare',[['Metric',...TIERNAME],['Budget',...Ts.map(t=>Math.round(t.budget))],['BOM creative masters',...Rs.map(R=>R.masters.length)],['Channels',...Ts.map(t=>t.channels)],['Placements',...Ts.map(t=>t.placements)],['Line items',...Ts.map(t=>t.lines)],['Est. impressions',...Ts.map(t=>Math.round(t.imp))],['Est. clicks',...Ts.map(t=>Math.round(t.clk))],['Est. leads',...Ts.map(t=>Math.round(t.leads))],['Master files',...Ts.map(t=>t.files)]],[24,14,14,14])}
 tiers.forEach(ti=>{const R=compute(ti),p=many?TIERNAME[ti]+' ':'';
  addSheet(wb,p+'Summary',summaryAOA(R),[40,14,10]);
  addSheet(wb,p+'BOM (MVP)',tableToAOA(mvpTable(R)),[8,22,26,80,30,60,8,12,12,9,9,12,10,10,12,60,36,30,14,11]);
  addSheet(wb,p+'Line Items',tableToAOA(bomTable(R)),[6,9,30,40,13,16,18,36,30,14,8,40,50,32,50,8,16,11,12,11,30,30,16,11,16]);
  addSheet(wb,p+'Creative Spec Sheet',tableToAOA(specTable(R)),[16,24,50,24,16,24,60,40,50,24,12,10,10]);
  addSheet(wb,p+'Flighting',tableToAOA(flightTable(R)),[28]);
  addSheet(wb,p+'Agency Tags - Pixels',tableToAOA(pixelTable(R)),[24,50,40,44,44,30,6]);
  addSheet(wb,p+'Agency Trafficking',tableToAOA(utmTable(R)),[6,22,36,14,6,14,70,80,40,40,12,16,30,22,14,90,30,11]);
 });
 addSheet(wb,'Rates & Assumptions',tableToAOA({cols:assumptionTable().cols,rows:assumptionTable().rows}),[24,44,12,8,10,12,10,13]);
 return wb;
}
function slug(){return (S.name||'media-plan').replace(/[^a-z0-9]+/gi,'-').replace(/^-|-$/g,'').slice(0,60)||'media-plan'}
window.__exportWorkbookB64=(all)=>XLSX.write(workbookFor(all?[0,1,2]:[UI.tier===3?1:UI.tier]),{type:'base64',bookType:'xlsx'});
function currentTable(){const R=compute(UI.tier);return {summary:()=>({cols:[['A','a'],['B','b'],['C','c']],rows:summaryAOA(R).map(r=>({a:r[0],b:r[1],c:r[2]})),raw:true}),bom:()=>mvpTable(R),lines:()=>bomTable(R),tagging:()=>utmTable(R),spec:()=>specTable(R),flight:()=>flightTable(R),assump:()=>assumptionTable(R)}[UI.tab]()}
function toDelim(tb,d){const q=v=>{v=v==null?'':String(v);return d===','&&/[",\n]/.test(v)?'"'+v.replace(/"/g,'""')+'"':v.replace(/\t|\n/g,' ')};
 const rows=tb.raw?tb.rows.map(r=>[r.a,r.b,r.c]):[tb.cols.map(c=>c[0]),...tb.rows.map(r=>tb.cols.map(([,k])=>r[k]))];return rows.map(r=>r.map(q).join(d)).join('\n')}
function setStatus(sel,msg,err){const el=$(sel);el.textContent=msg;el.classList.toggle('err',!!err)}
let DL=null;
async function saveFile(filename,data){
 if(!DL){ // standalone site (e.g. GitHub Pages): plain browser download
  try{const blob=data instanceof Blob?data:new Blob([data],{type:/\.csv$/.test(filename)?'text/csv;charset=utf-8':'application/octet-stream'});
   const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=filename;document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},1000);setStatus('#x-status','Downloaded '+filename)}
  catch(e){setStatus('#x-status','Downloads are not available here. Use “Copy table” and paste into a sheet.',true)}return}
 try{await DL.save({filename,data});setStatus('#x-status','Saved '+filename)}catch(e){setStatus('#x-status',e&&e.code==='declined'?'Download cancelled.':'Could not save the file ('+(e&&e.code||'error')+').',e&&e.code!=='declined')}
}
$('#x-xlsx').onclick=()=>{if(!window.XLSX)return setStatus('#x-status','The spreadsheet library did not load. Reload the page and try again.',true);const ti=UI.tier===3?1:UI.tier;
 saveFile(`${slug()}-${TIERS[ti]}-paid-media-bom.xlsx`,XLSX.write(workbookFor([ti]),{type:'array',bookType:'xlsx'}))};
$('#x-all').onclick=()=>{if(!window.XLSX)return setStatus('#x-status','The spreadsheet library did not load. Reload the page and try again.',true);
 saveFile(`${slug()}-all-versions-paid-media-bom.xlsx`,XLSX.write(workbookFor([0,1,2]),{type:'array',bookType:'xlsx'}))};
$('#x-csv').onclick=()=>saveFile(`${slug()}-${TIERS[UI.tier]}-${UI.tab}.csv`,toDelim(currentTable(),','));
$('#x-copy').onclick=()=>{const txt=UI.tier===3?'':toDelim(currentTable(),'\t');
 navigator.clipboard.writeText(txt).then(()=>setStatus('#x-status','Copied. Paste into Excel or Google Sheets.')).catch(()=>{const ta=document.createElement('textarea');ta.value=txt;document.body.appendChild(ta);ta.select();try{document.execCommand('copy');setStatus('#x-status','Copied. Paste into Excel or Google Sheets.')}catch(e){setStatus('#x-status','Copy was blocked here.',true)}ta.remove()})};

/* ==================== DOC UPLOAD + EXTRACTION ==================== */
$('#in-file').onchange=async e=>{const f=e.target.files[0];if(!f)return;setStatus('#extract-status','Reading '+f.name+'…');
 try{let text;PDF=null;
  if(/\.pdf$/i.test(f.name)||f.type==='application/pdf'){const buf=await f.arrayBuffer();const r=await pdfRead(buf);PDF={name:f.name,buf,pageChars:r.pageChars,b64:b64(buf),text:r.text.replace(/\n{3,}/g,'\n\n').trim(),pages:r.pages};text=PDF.text;
   if(text.length<40){S.brief='';$('#in-brief').value='';save();
    return setStatus('#extract-status',(agentOn()||SAMPLE)?`Loaded ${f.name} (${r.pages} page${r.pages>1?'s':''}). It has no selectable text, so ${SAMPLE?'Claude':'the AI agent'} will read the pages directly. Press “Fill inputs from doc”.`:`${f.name} has no selectable text (it may be scanned). Connect an AI agent below so it can read the pages, or paste the text.`,!(agentOn()||SAMPLE))}}
  else if(/\.docx$/i.test(f.name)){if(!window.mammoth)throw new Error('Word reader did not load');const r=await mammoth.extractRawText({arrayBuffer:await f.arrayBuffer()});text=r.value}
  else text=await f.text();
  S.brief=text.replace(/\n{3,}/g,'\n\n').trim();$('#in-brief').value=S.brief;save();
  setStatus('#extract-status',`Loaded ${f.name}${PDF?` (${PDF.pages} pages, ${S.brief.length.toLocaleString()} characters)`:` (${S.brief.length.toLocaleString()} characters)`}.${PDF&&SAMPLE?' Claude will also look at the pages, so charts and scans count.':PDF&&agentOn()?' The AI agent will read the PDF itself.':''} Press “Fill inputs from doc”.`)}
 catch(err){setStatus('#extract-status','Could not read that file: '+err.message,true)}e.target.value=''};

const MKT_RULES=[['NA',/north america|\bus\b|\busa\b|united states|canada/i,'North America','EN'],['EMEA',/emea|europe|\buk\b|turkey|germany|france|middle east/i,'EMEA','EN'],['CN',/china|chinese|mainland/i,'China','ZH'],['JP',/japan/i,'Japan','JA'],['KR',/korea/i,'Korea','KO'],['SEA',/southeast asia|\bsea\b|vietnam|indonesia|thailand|philippines|singapore/i,'Southeast Asia','EN'],['LATAM',/latam|latin america|brazil|mexico/i,'LATAM','ES']];
const CH_RULES={linkedin:/linkedin/i,google:/google search|paid search|\bsem\b|search ads|llm search|organic search/i,x:/\bx \(twitter\)|twitter|\bx\b/i,reddit:/reddit/i,youtube:/youtube|video series|video testimonial/i,trade:/pocketgamer|gamesindustry|adexchanger|trade press|industry press/i,creators:/podcast|newsletter|deconstructor|influencer|creator/i,abm:/abm|account[- ]based|target account/i,events:/\bgdc\b|chinajoy|conference|summit|event/i,wechat:/wechat|china/i,baidu:/baidu|china/i,naver:/naver|korea/i};
function applyExtract(x){
 const changes=[];
 if(x.campaignName){S.name=x.campaignName;changes.push('name')}
 if(x.product){S.product=x.product;changes.push('product')}
 if(Array.isArray(x.markets)&&x.markets.length){
  const nm=[];x.markets.forEach(m=>{const name=String(m.name||'');let w=+m.weight||10;
   if(/^apac$|asia[- ]pacific/i.test(name)){['CN','JP','KR','SEA'].forEach(id=>{const r=MKT_RULES.find(r=>r[0]===id);nm.push({id,name:r[2],lang:r[3],on:true,weight:Math.round(w/4)})});return}
   const r=MKT_RULES.find(r=>r[1].test(name));const id=r?r[0]:'M'+nm.length+Date.now();
   const ex=nm.find(q=>q.id===id);if(ex){ex.weight+=w;return}
   nm.push({id,name:r?r[2]:name,lang:r?r[3]:(m.language||'EN').toUpperCase().slice(0,5),on:true,weight:w})});
  MKT_RULES.forEach(r=>{if(!nm.find(q=>q.id===r[0]))nm.push({id:r[0],name:r[2],lang:r[3],on:false,weight:5})});
  S.markets=nm;changes.push(nm.filter(m=>m.on).length+' markets')}
 if(Array.isArray(x.personas))x.personas.forEach(p=>{if(S.personas[p.role]&&p.label){S.personas[p.role].label=p.label;S.personas[p.role].on=true}});
 if(Array.isArray(x.personas)&&x.personas.length)changes.push('personas');
 if(Array.isArray(x.initiatives)&&x.initiatives.length){S.initiatives=x.initiatives.slice(0,5).map(i=>({name:i.name||'Initiative',stage:STAGE[i.stage]?i.stage:'Consideration',pillar:i.pillar||''}));changes.push(S.initiatives.length+' initiatives')}
 if(x._clearMoments){S.moments=[];changes.push('example launch moments cleared')}
 if(Array.isArray(x.moments)&&x.moments.length){S.moments=x.moments.filter(m=>/^\d{4}-\d{2}$/.test(m.month||'')).map(m=>({name:m.name||'Moment',month:m.month,type:['launch','event','content'].includes(m.type)?m.type:'launch',ini:+m.initiative||0}));changes.push(S.moments.length+' moments')}
 if(Array.isArray(x.channels)&&x.channels.length){CH.forEach(c=>{S.channels[c.id].on=x.channels.includes(c.id)});
  // local platforms follow their market
  if(S.markets.find(m=>m.id==='CN'&&m.on)){S.channels.wechat.on=true;S.channels.baidu.on=true}if(S.markets.find(m=>m.id==='KR'&&m.on))S.channels.naver.on=true;
  S.channels.linkedin.on=true;changes.push(CH.filter(c=>S.channels[c.id].on).length+' channels')}
 if(/^\d{4}-\d{2}-\d{2}$/.test(x.flightStart||'')){S.start=x.flightStart;changes.push('flight')}
 if(/^\d{4}-\d{2}-\d{2}$/.test(x.flightEnd||''))S.end=x.flightEnd;
 if(+x.budget>0){S.budgets={lean:Math.round(x.budget*0.45/1000)*1000,standard:Math.round(+x.budget),full:Math.round(x.budget*1.75/1000)*1000};changes.push('budgets')}
 return changes;
}
function localExtract(text){
 const x={markets:[],channels:[]};
 MKT_RULES.forEach(r=>{const n=(text.match(new RegExp(r[1].source,'gi'))||[]).length;if(n)x.markets.push({name:r[2],weight:n})});
 if(/\bapac\b/i.test(text)&&!x.markets.some(m=>['China','Japan','Korea'].includes(m.name)))x.markets.push({name:'APAC',weight:4});
 const tot=sum(x.markets.map(m=>m.weight));x.markets.forEach(m=>m.weight=Math.max(5,Math.round(m.weight/tot*100)));
 for(const k in CH_RULES)if(CH_RULES[k].test(text))x.channels.push(k);
 const first=text.split('\n').map(s=>s.trim()).find(s=>s.length>3&&s.length<90);if(first)x.campaignName=first;
 // a keyword scan cannot read initiatives or launch dates, so swap the example's for neutral placeholders
 x.initiatives=[{name:'Brand & awareness',stage:'Awareness',pillar:''},{name:'Adoption & conversion',stage:'Conversion',pillar:''},{name:'Product & technical education',stage:'Consideration',pillar:''}];
 x._clearMoments=true;
 return x;
}
let SAMPLE=null;
const PDFJS_WORKER='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
/* ==================== AI AGENT ====================
   Two ways to reach Claude: the built-in one when this page runs inside Claude (SAMPLE),
   or the viewer's own Anthropic API key, which also reads PDFs natively (layout, tables, scans). */
const AGENT_LS='paid-media-bom-agent';
let AGENT=null;try{AGENT=JSON.parse(localStorage.getItem(AGENT_LS)||'null')}catch(e){AGENT=null}
let PDF=null; // {name,b64,text,pages} of the last uploaded PDF, kept in memory only
const AGENT_MODELS=[['claude-opus-5-5','Claude Opus 5.5 (best)'],['claude-sonnet-5-5','Claude Sonnet 5.5 (faster)'],['claude-haiku-5-5','Claude Haiku 5.5 (cheapest)']];
const agentOn=()=>!SAMPLE&&!!(AGENT&&AGENT.key);
const aiReady=()=>agentOn()||!!SAMPLE;
const aiLabel=()=>agentOn()?'Your AI agent':'Claude';
// Page images for the built-in Claude: scanned or chart-heavy pages first, up to the view's image limit.
async function pdfImages(pdf){
 const lim=await SAMPLE.limits().catch(()=>null);const max=lim&&lim.images&&lim.images.maxCount;if(!max||!window.pdfjsLib)return null;
 const order=pdf.pageChars.map((c,i)=>[c,i+1]).sort((a,b)=>(a[0]>=400)-(b[0]>=400)||a[1]-b[1]).slice(0,max).map(x=>x[1]).sort((a,b)=>a-b);
 if(pdf.pageChars.every(c=>c>=400)&&pdf.pages>max)order.splice(0,order.length,...Array.from({length:Math.min(max,pdf.pages)},(_,i)=>i+1));
 const doc=await pdfjsLib.getDocument({data:new Uint8Array(pdf.buf.slice(0))}).promise;const blobs=[];
 for(const n of order){const pg=await doc.getPage(n);const v1=pg.getViewport({scale:1});const sc=Math.min(2,Math.sqrt(1.2e6/(v1.width*v1.height)));
  const v=pg.getViewport({scale:sc});const c=document.createElement('canvas');c.width=Math.round(v.width);c.height=Math.round(v.height);
  const g=c.getContext('2d');g.fillStyle='#fff';g.fillRect(0,0,c.width,c.height);await pg.render({canvasContext:g,viewport:v}).promise;
  blobs.push(await new Promise(r=>c.toBlob(r,'image/jpeg',.85)))}
 return {blobs,pages:order};
}
function pdfForBrief(){return PDF&&(agentOn()||SAMPLE)&&(!PDF.text.trim()||(S.brief||'').trim()===PDF.text.trim())?PDF:null}
async function aiJSON(prompt,{pdf}={}){
 if(SAMPLE){const imgs=pdf?await pdfImages(pdf):null;
  if(imgs)return SAMPLE.json(`${imgs.pages.length>1?`The ${imgs.pages.length} images are pages ${imgs.pages.join(', ')}`:`The image is page ${imgs.pages[0]}`} of the GTM strategy PDF${imgs.pages.length<pdf.pages?` (of ${pdf.pages})`:''}, rendered as pictures. Read their text, tables and charts as part of the doc.\n\n`+prompt,{modelTier:'default',images:imgs.blobs});
  return SAMPLE.json(prompt,{modelTier:'default'})}
 if(agentOn())return agentJSON(prompt,pdf);
 throw {code:'no_agent'};
}
async function agentJSON(prompt,pdf){
 const content=[];
 if(pdf)content.push({type:'document',source:{type:'base64',media_type:'application/pdf',data:pdf.b64},title:pdf.name});
 content.push({type:'text',text:pdf?'The attached PDF is the GTM strategy doc. Read all of it, including tables and charts.\n\n'+prompt:prompt});
 const body={model:AGENT.model||AGENT_MODELS[0][0],max_tokens:16000,output_config:{effort:'medium'},messages:[{role:'user',content}]};
 const fb=/^claude-(opus|sonnet)-5-5$/.test(body.model);if(fb)body.fallbacks='default';
 let r;
 try{r=await fetch('https://api.anthropic.com/v1/messages',{method:'POST',headers:Object.assign({'content-type':'application/json','x-api-key':AGENT.key,'anthropic-version':'2023-06-01','anthropic-dangerous-direct-browser-access':'true'},fb?{'anthropic-beta':'server-side-fallback-2026-07-01'}:{}),body:JSON.stringify(body)})}
 catch(e){throw {code:'agent_network',message:'Could not reach api.anthropic.com from this browser.'}}
 const j=await r.json().catch(()=>({}));
 if(!r.ok){const m=(j.error&&j.error.message)||('HTTP '+r.status);
  throw {code:r.status===401||r.status===403?'agent_key':r.status===429?'rate_limited':r.status===413?'agent_too_big':'agent_error',message:m}}
 if(j.stop_reason==='refusal')throw {code:'agent_refusal',message:'The model declined this request.'};
 const t=(j.content||[]).filter(b=>b.type==='text').map(b=>b.text).join('');
 const m=t.match(/[\[{][\s\S]*[\]}]/);if(!m)throw {code:'agent_bad_reply',message:'The reply was not JSON.'};
 try{return JSON.parse(m[0])}catch(e){throw {code:'agent_bad_reply',message:'The reply was not valid JSON.'}}
}
function aiErr(e,what){
 const c=e&&e.code;
 if(c==='agent_key')return 'Your API key was rejected. Check it under “AI agent”.';
 if(c==='rate_limited')return 'The AI agent is busy (rate limited). Wait a minute and try again.';
 if(c==='agent_too_big')return 'That PDF is too large for the agent (32 MB / 600 pages max).';
 if(c==='agent_network'||c==='agent_refusal'||c==='agent_bad_reply'||c==='agent_error')return what+' failed: '+(e.message||c)+'.';
 return what+' failed'+(c?' ('+c+')':'')+'. Try again, or shorten the text to the key sections.';
}
function renderAgent(){
 const on=agentOn();
 $('#agent-chip').textContent=SAMPLE?'Your Claude account':on?'Connected':'Not connected';
 $('#agent-chip').classList.toggle('on',on||!!SAMPLE);
 $('#agent-key').value='';$('#agent-key').placeholder=on?'Key saved (…'+AGENT.key.slice(-4)+')':'sk-ant-…';
 $('#agent-model').innerHTML=AGENT_MODELS.map(([v,l])=>`<option value="${v}"${(AGENT&&AGENT.model||AGENT_MODELS[0][0])===v?' selected':''}>${l}</option>`).join('');
 $('#agent-off').hidden=!on;
 document.querySelectorAll('#d-agent .agent-body>:not(#agent-msg)').forEach(el=>el.hidden=!!SAMPLE);
 $('#agent-msg').textContent=on?`Connected to ${AGENT_MODELS.find(m=>m[0]===AGENT.model)?.[1]||AGENT.model}. Uploaded PDFs go to the agent whole, so it reads tables, charts and scanned pages.`
  :SAMPLE?'Claude is built in here and runs on your Claude account, so no key is needed. Uploaded PDFs are sent as text plus page images, so tables, charts and scanned pages are read too.'
  :'Add an Anthropic API key to let an AI agent read the brief and PDFs. Without one, a keyword scan fills the inputs.';
}
async function pdfRead(buf){
 if(!window.pdfjsLib)throw new Error('PDF reader did not load');
 pdfjsLib.GlobalWorkerOptions.workerSrc=PDFJS_WORKER;
 const doc=await pdfjsLib.getDocument({data:new Uint8Array(buf.slice(0))}).promise;const out=[];
 for(let i=1;i<=doc.numPages;i++){const c=await(await doc.getPage(i)).getTextContent();
  out.push(c.items.map(it=>it.str+(it.hasEOL?'\n':' ')).join('').replace(/[ \t]+\n/g,'\n'))}
 return {text:out.join('\n\n'),pages:doc.numPages,pageChars:out.map(t=>t.replace(/\s+/g,'').length)};
}
function b64(buf){const u=new Uint8Array(buf);let s='';for(let i=0;i<u.length;i+=0x8000)s+=String.fromCharCode.apply(null,u.subarray(i,i+0x8000));return btoa(s)}
$('#agent-on').onclick=()=>{
 const k=$('#agent-key').value.trim(),model=$('#agent-model').value;
 if(!k&&!agentOn())return setStatus('#agent-status','Paste an API key first.',true);
 if(k&&!/^sk-ant-/.test(k))return setStatus('#agent-status','That does not look like an Anthropic API key (it starts with sk-ant-).',true);
 AGENT={key:k||AGENT.key,model};try{localStorage.setItem(AGENT_LS,JSON.stringify(AGENT))}catch(e){}
 renderAgent();setStatus('#agent-status','Saved. Testing the connection…');
 agentJSON('Reply with only this JSON: {"ok":true}').then(()=>setStatus('#agent-status','The AI agent is connected and answering.')).catch(e=>setStatus('#agent-status',aiErr(e,'The test'),true));
};
$('#agent-model').onchange=()=>{if(agentOn()){AGENT.model=$('#agent-model').value;try{localStorage.setItem(AGENT_LS,JSON.stringify(AGENT))}catch(e){}renderAgent()}};
$('#agent-off').onclick=()=>{AGENT=null;try{localStorage.removeItem(AGENT_LS)}catch(e){}renderAgent();setStatus('#agent-status','Disconnected. Your key was removed from this browser.')};

$('#btn-extract').onclick=async()=>{
 const text=(S.brief||'').trim();const pdf=pdfForBrief();if(text.length<40&&!pdf)return setStatus('#extract-status','Paste or upload the GTM doc text first.',true);
 const btn=$('#btn-extract');btn.disabled=true;
 const yr=(S.start||'2026').slice(0,4);
 try{
  let x,how;
  if(aiReady()){
   setStatus('#extract-status',aiLabel()+(pdf?' is reading '+pdf.name+'…':' is reading the brief…'));
   const prompt=`You are a senior paid media planner. Read the GTM strategy text below and extract inputs for a paid media plan.
Reply with only JSON in exactly this shape:
{"campaignName":string,"product":string,
 "markets":[{"name":string,"weight":number}],
 "personas":[{"role":"dm"|"tech"|"user","label":string}],
 "initiatives":[{"name":string,"stage":"Awareness"|"Consideration"|"Conversion","pillar":string}],
 "moments":[{"name":string,"month":"YYYY-MM","type":"launch"|"event"|"content","initiative":number}],
 "channels":[string],"flightStart":"YYYY-MM-DD"|null,"flightEnd":"YYYY-MM-DD"|null,"budget":number|null}
Rules:
- markets: regions or countries the doc prioritizes, using names like North America, EMEA, China, Japan, Korea, Southeast Asia, LATAM. weight = suggested % of paid budget, summing to 100.
- personas: dm = economic decision-maker, tech = technical influencer / practitioner lead, user = day-to-day user. label = short job titles from the doc.
- initiatives: the doc's strategic initiatives or pillars (max 5), each with a one-line message pillar. Order them brand/awareness first, then adoption/cross-sell, then data/technical.
- moments: product launches, content drops (reports, video series) and events with a month. Convert quarters to the quarter's first month unless a month is named. Year defaults to ${yr}. initiative = 0-based index into initiatives.
- channels: choose from linkedin, google, x, reddit, youtube, trade, creators, abm, events, wechat, baidu, naver, based on where the audiences learn about solutions and on the tactics in the doc.
- budget: total paid media budget in USD only if the doc states one, else null. flightStart/flightEnd only if stated, else null.

GTM STRATEGY TEXT:
"""
${text.slice(0,60000)}
"""`;
   x=await aiJSON(prompt,{pdf});how=SAMPLE?'Claude'+(pdf?', with page images':''):'AI agent'+(pdf?', full PDF':'');
  }else{x=localExtract(text);how='keyword scan'}
  const ch=applyExtract(x||{});clearCopyForNewBrief();renderInputs();changed();$('#exampleBadge').hidden=true;
  setStatus('#extract-status',ch.length?`Filled from the doc (${how}): ${ch.join(', ')}. Review the sections below.`:'Nothing usable was found in the text. Fill the inputs by hand.',!ch.length);
  if(aiReady())draftCopy();else setStatus('#copy-status','The previous ad copy was cleared for this brief. Write new copy here.');
 }catch(e){
  if(e&&e.code==='not_granted'){const x=localExtract(text);const ch=applyExtract(x);clearCopyForNewBrief();renderInputs();changed();setStatus('#copy-status','The previous ad copy was cleared for this brief. Write new copy here.');setStatus('#extract-status','Claude access was declined, so a keyword scan filled: '+(ch.join(', ')||'nothing')+'.')}
  else setStatus('#extract-status',aiErr(e,'Extraction'),true)
 }finally{btn.disabled=false}
};

function clearCopyForNewBrief(){S.copyEdits={};S.copy={src:S.name,voice:'',ctas:'',proof:'',ini:S.initiatives.map(()=>({h:'',b:''}))}}
$('#btn-copy').onclick=()=>draftCopy();
async function draftCopy(){
 if(!aiReady())return setStatus('#copy-status','No AI agent is connected. Connect one in section 1, or write the copy for this brief by hand.',true);
 const btn=$('#btn-copy');btn.disabled=true;setStatus('#copy-status',aiLabel()+' is drafting copy for '+(S.name||'this brief')+'…');
 try{
  const prompt=`You are a B2B performance copywriter. Write paid media ad copy for this campaign.
Campaign: ${S.name}
Product: ${S.product}
Voice: ${S.copy.voice||'clear, specific, outcome-led'}
Audiences: ${Object.values(S.personas).filter(p=>p.on).map(p=>p.label).join('; ')}
Initiatives (index: name: message pillar):
${S.initiatives.map((x,i)=>i+': '+x.name+': '+x.pillar).join('\n')}
Brief excerpt:
<<<
${(S.brief||'').slice(0,15000)}
>>>
Reply with only JSON: {"voice":string,"ctas":[string],"proof":[string],"initiatives":[{"headlines":[string],"body":[string]}]}
Rules: one entry in "initiatives" per initiative above, same order. For each: 5 headlines that mix lengths (at least 2 of 30 characters or fewer, 1 of 15 or fewer, others up to 70) and 3 body lines (one of 40 characters or fewer, one of about 90, one of about 150). CTAs: 5, each 25 characters or fewer. Proof points: up to 4, only facts stated in the brief. No exclamation marks, no invented numbers.`;
  const x=await aiJSON(prompt);
  if(x.voice)S.copy.voice=x.voice;if(Array.isArray(x.ctas))S.copy.ctas=x.ctas.join('\n');if(Array.isArray(x.proof)&&x.proof.length)S.copy.proof=x.proof.join('\n');
  if(Array.isArray(x.initiatives))x.initiatives.forEach((q,i)=>{if(!S.copy.ini[i])S.copy.ini[i]={h:'',b:''};S.copy.ini[i].h=(q.headlines||[]).join('\n');S.copy.ini[i].b=(q.body||[]).join('\n')});
  S.copy.src=S.name;renderCopyInputs();changed();setStatus('#copy-status','Copy drafted for '+(S.name||'this brief')+'. Edit any line; the BOM updates as you type.');
 }catch(e){setStatus('#copy-status',e&&e.code==='not_granted'?'Claude access was declined. Write the copy by hand.':aiErr(e,'Drafting'),true)}
 finally{btn.disabled=false}
}

/* ==================== BOOT ==================== */
renderInputs();renderOut();renderAgent();
(function hook(n){
 if(window.claude&&claude.use){claude.use('downloads').then(d=>{DL=d}).catch(()=>{});claude.use('sample').then(s=>{SAMPLE=s;renderAgent()}).catch(()=>{});return}
 if(n<20)setTimeout(()=>hook(n+1),250);
})(0);
