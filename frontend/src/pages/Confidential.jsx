import React, { useEffect, useState } from "react";
import productService from "../services/product.service";
import { Link } from 'react-router-dom';
function Confidential() {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      productService
        .getProducts()
        .then((response) => response.data)
        .then((data) => {
          console.log(data);
          setProducts(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }, []);

    return (
        <div className=" mt-4">
            <h1 className="text-center font-bold text-2xl">Құпиялылық саясаты</h1>
            <h2 className="text-center font-bold text-xl mt-4">интернет-дүкенде тауарларды сату ережелері</h2>
            <div className="flex justify-center">
                <p className="text-start mt-4"><span className="font-bold">Сатушы</span> - "Онлайн дүкен" жауапкершілігі шектеулі серіктестігі, БСН: 210540005587,<br></br>
                 тіркеу орнының мекенжайы (нақты орналасқан жері): Қазақстан Республикасы, индексі: A26t1a1, Алматы қ.,<br></br>
                 Мауленова, 92 үй.
                </p>
                
            </div>
            <div className="flex justify-center">
                <p className="text-start mt-4"><span className="font-bold">Клиент</span>-тапсырыс беруге немесе сатып алуға ниеті бар не Тапсырыс беруші (Сатып алушы), не<br></br> 
                Сатушының Интернет-дүкенінде тауарды алушы ретінде көрсетілген немесе тауарларды тек қана<br></br> 
                жеке, отбасылық,үй және кәсіпкерлік қызметті жүзеге асыруға байланысты емес өзге де қажеттіліктер үшін<br></br> 
                пайдаланатын толық қабілетті жеке тұлға.
                </p>
            </div>
            <div className="flex justify-center">
                <p className="text-start mt-4"><span className="font-bold">Алушы</span>-тапсырысты нақты қабылдауды жүзеге асыратын жеке тұлға. Егер басқаша көрсетілмесе,<br></br>
                 Сатып алушы тауарды алушы болып саналады. Сатып алушы тапсырысты ресімдеу кезінде көрсеткен<br></br>
                 және оның өкілі болып табылатын өзге жеке тұлға алушы бола алады. Егер осы Қағидаларда  <br></br> 
                 өзгеше көрсетілмесе, алушыға сатып алушы үшін белгіленген барлық құқықтар мен міндеттерді қолданады.
                </p>
            </div>
            <div className="flex justify-center">
                <p className="text-start mt-4"><span className="font-bold">Интернет-дүкен</span>-бұл сатушыға тиесілі және Интернет желісінде мекен-жайы бар нақты Интернет-сайт <br></br>
                <Link className="text-yellow-700" to='/'>https://swiftness.kz.</Link> онда сатушы өз клиенттеріне тапсырыстарды рәсімдеу үшін ұсынатын тауарлар,сондай- <br></br>
                ақ осы тапсырыстарды сату, төлеу және клиенттерге жеткізу шарттары көрсетілген.
                </p>
            </div>
            <div className="flex justify-center">
                <p className="text-start mt-4"><span className="font-bold">Интернет-дүкен</span>-Қазақстан Республикасының қолданыстағы заңнамасын сақтай отырып, сатушы және / не<br></br>
                месе тартылған үшінші тұлғалар басқаратын ақпараттық ресурстардың жиынтығы.
                </p>
            </div>
            <div className="flex justify-center">
                <p className="text-start mt-4"><span className="font-bold">Тауар</span>-бұл азаматтық айналымнан алынбаған және сайтта тек жеке, отбасылық, тұрмыстық және кәсіпкерлік<br></br> 
                қызметті жүзеге асыруға байланысты емес басқа да қажеттіліктер үшін сатуға ұсынылған материалдық<br></br>  әлемнің объектісі. Сатып алу-сату заты тек
                Интернет-дүкенде "қол жетімді"мәртебесі бар тауарлар ретінде<br></br>  белгіленген тауарлар болуы мүмкін.</p>
            </div>
            <div className="flex justify-center">
                <p className="text-start mt-4"><span className="font-bold">Тапсырыс</span> – Сайтта таңдалған тауарлар тізбесінің көрсетілген мекенжайы бойынша жеткізу үшін интернет-<br></br>
                дүкенде тауарларды сатудың осы қағидаларына сәйкес клиент ресімдеген және сатушы растаған сұрау салу. <br></br>
                Тапсырыс бөлшек сатып алу-сату шартын жасасу мақсатында да, ҚР заңнамасында көзделген жағдай<br></br> 
                ларда бұрын жасалған шарт бойынша тауарларды айырбастауды немесе ауыстыруды жүзеге асыру<br></br>
                үшін де ресімделуі мүмкін.</p>
            </div>
            <div className="flex justify-center">
                <p className="text-start mt-4"><span className="font-bold">Тапсырыстың немесе тауардың күшін жою</span>-сатушының Шартты орындаудан бас тартуын білдірмейтін <br></br> 
                сатушының техникалық әрекеті, ол сайтта жүзеге асырылады және Тапсырыс құрамындағы кейбір тауарлар <br></br> 
                дың (тауардың күшін жою) не тапсырыс құрамындағы барлық тауарлардың (тапсырыстың күшін<br></br>
                жою)Клиентке ағымдағы тапсырыс бойынша берілмегендігін көрсетеді.</p>
            </div>
            <div className="flex justify-center">
                <p className="text-start mt-4"><span className="font-bold">Жеткізу қызметі</span>-сатушымен шарт бойынша клиенттерге тапсырыстарды жеткізу бойынша қызметтер<br></br> 
                көрсететін үшінші тұлға. Сатушы Сатып алушының келісімінсіз жеткізу қызметін дербес айқындауға<br></br> 
                құқылы. Жеткізу қызметі туралы өзекті ақпарат сайтта тапсырысты ресімдеу нысанында орналастырылады.</p>
            </div>
            <div className="flex justify-center">
                <p className="text-start mt-4"><span className="font-bold">Есептік жазба</span>-сайтта сатып алушыны сәйкестендіру үшін қажетті мәліметтерді, сондай-ақ авторизация  мен <br></br> 
                есепке алу үшін ақпаратты қамтитын жазба.</p>
            </div>
            <div className="flex justify-center">
                <p className="text-start mt-4">Осы Ереже тауарларды Интернет-дүкен арқылы бөлшек саудада сатып алу-сату тәртібін айқындайды <br></br>
                және Қазақстан Республикасы Азаматтық Кодексінің 395 - бабына сәйкес сатып алушыларға арналған <br></br>
                сатушының жария оферт болып табылады, сатушы мен Сатып алушы бірлесіп аталған кезде де "Тараптар",<br></br> 
                ал әрқайсысы  жеке - "Тарап"деп аталады.</p>
            </div>
            <div className="flex justify-center">
                <p className="text-start mt-4">Әрбір Тарап екінші Тарапқа бөлшек сауда - саттық шартын жасасу және орындау үшін қажетті және<br></br> 
                жеткілікті қажетті құқық пен әрекет қабілеттілігіне, сондай-ақ барлық құқықтар мен өкілеттіктерге ие болу <br></br> 
                ына кепілдік береді.</p>
            </div>
            <div className="flex justify-center">
                <p className="text-start mt-4">Сатып алушы мен сатушы арасындағы қатынастарға ҚР Азаматтық кодексінің ережелері (оның ішінде  <br></br> 
                бөлшек сауда-сату туралы ережелер (§2, 25-тарау), "тұтынушылардың құқықтарын қорғау туралы" 2010 <br></br> 
                жылғы 4 мамырдағы № 274-IV Қазақстан Республикасының Заңы, 2004 жылғы 12 сәуірдегі № 544-II <br></br> 
                Қазақстан Республикасының Заңы қолданылады "Сауда қызметін реттеу туралы"," Ішкі сауда қағидаларын <br></br> 
                бекіту туралы " Қазақстан Республикасы Ұлттық экономика министрінің м.а. 2015 жылғы 27 наурыздағы  <br></br>
                № 264 бұйрығы және оларға сәйкес қабылданған өзге де құқықтық актілер.)</p>
            </div>
            <div className="flex justify-center">
                <p className="text-start mt-4">Тапсырысты Интернет-дүкеннің электрондық поштасына жіберген кезде немесе байланыс орталығының<br></br> 
                телефоны арқылы Тапсырысты ресімдеген кезде Сатып алушы осы Қағидалармен танысқанын және<br></br> келісетінін растайды.</p>
            </div>
            <div className="flex justify-center">
                <p className="text-start mt-4">Сатушы кез келген уақытта сатып алушыға немесе сайттың өзге пайдаланушыларына ескертусіз осы шарт <br></br> 
                тарға өзгерістер енгізу құқығын өзіне қалдырады. Жаңадан енгізілген өзгерістер Сатып алушы мен<br></br>
                сатушы осындай өзгерістер енгізу кезінде ресімдеген және растаған тапсырыстарға әсер ете алмайды.</p>
            </div>
            <div className="flex justify-center">
                <p className="text-start mt-4">Барлық өзгерістер күшіне енеді және сайтта жарияланған сәттен бастап сатып алушының және сайттың өз<br></br> 
                ге пайдаланушыларының назарына жеткізілген болып есептеледі.</p>
            </div>
            <div className="flex justify-center">
                <p className="text-start mt-4">Сату шарттары сату шарттарының ажырамас бөлігі болып табылатын егжей-тегжейлі ақпараты бар нақты <br></br>
                тақырыптық бөлімдерге белсенді сілтемелері бар тармақтарды қамтиды. Осы шарттардың белгілі бір <br></br> 
                бөліктеріне белсенді гиперсілтемелер арқылы қол жеткізуді қамтамасыз ету тәсілі Интернет желісінде  <br></br>
                ақпаратты орналастырудың жалпы қабылданған тәсілі болып табылады.</p>
            </div>
            <div className="flex justify-center">
                <p className="text-start mt-4">Акциялар өткізілген жағдайда, сайтта орналастырылатын акциялар жағдайында тапсырысты ресімдеу<br></br> 
                және тауарды қайтару тәртібін реттейтін арнайы ережелер белгіленуі мүмкін. Бұл ретте акциялардың<br></br>
                шарттары осы сату шарттарының ажырамас бөлігі болып табылады және акцияларға қатысатын тұлғалар <br></br> 
                үшін қолдануға жатады. Науқандық тапсырысты ресімдеу және / немесе науқанға қатысудың өзге де  <br></br> 
                шарттарын орындау клиенттің тиісті науқан шарттарымен келісуін білдіреді. Интернет – дүкенде <br></br>
                тауарларды акциялардың шарттарына сату  Қағидалары осы Ережеге қайшы (сәйкес келмеген) жағдайда,<br></br> 
                акциялық тауарға қатысты акцияның шарттары артықшылыққа ие болады.</p>
            </div>
            <div className="flex justify-center">
                <p className="text-start mt-4"> Осы Саясатқа және өзінің дербес деректерін пайдалануға қатысты барлық ұсыныстарды, мәселелерді,<br></br> 
                сұрауларды және өзге де өтініштерді пайдаланушы сайтқа жіберуге құқылы:- электрондық пошта <br></br> 
                мекенжайы бойынша: shop@swiftness.kz;- пошта мекенжайы бойынша: Қазақстан, Алматы қ., Мауленова <br></br>
                92 мекенжайы +7 (775) 700-44-94 телефоны бойынша</p>
            </div>

            

        </div>

    )
};

export default Confidential;