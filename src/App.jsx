import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  delte,
  increment,
  incrementByAmount,
  mutilpy,
} from "./assets/redux/counter/counter";
import { Nav } from "./assets/Nav";
// import Sroll from "./assets/Srol";
import { Rea } from "./assets/Re";
// import watt from "./assets/react-native.png";
function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
       {/* <Sroll/> */}
       <Rea/>
      <div className="">
        <Nav />
        <div className="text-center mt-3">
          <span
            onClick={() => dispatch(decrement())}
            className="bg-red-600 text-2xl cursor-pointer mx-4 p-4 text-blue-400"
          >
            -
          </span>
          <span
            onClick={() => dispatch(increment())}
            className="bg-red-600 text-2xl cursor-pointer mx-4 p-4 text-blue-400"
          >
            +
          </span>

          <button className="bg-red-600 text-2xl text-blue-400">{count}</button>
          <span
            onClick={() => dispatch(incrementByAmount(6))}
            className="bg-red-600 mx-4 p-4 cursor-pointer text-2xl text-blue-400"
          >
            ++
          </span>
          <span
            onClick={() => dispatch(mutilpy())}
            className="bg-red-600  mx-4 p-4  cursor-pointer text-2xl text-yellow-100"
          >
            *
          </span>
          <span
            onClick={() => dispatch(delte())}
            className="bg-red-600  mx-4 p-4  cursor-pointer text-2xl text-yellow-100"
          >
            dele
          </span>
        </div>

        <div className="mt-[10%] ">
         
         
        
         
          obcaecati enim dolore. Quae non libero illum sit quisquam autem,
          inventore molestias voluptatum totam fuga cupiditate eos velit
          corrupti officiis dignissimos veritatis laboriosam mollitia aut iste.
          Illo possimus consequuntur tempore molestiae. Iure eum rem sint
          voluptate, vel enim quaerat esse. Neque corrupti aliquam nobis eos
          perspiciatis autem quidem ex perferendis, laborum repellat, dolores
          incidunt. Consequuntur, eaque nulla explicabo illum aperiam doloremque
          accusamus fuga accusantium facilis ut autem recusandae dolore quidem,
          corporis saepe dignissimos assumenda ullam. Fugit earum hic
          perspiciatis est impedit accusamus doloremque quidem dolore nemo
          voluptate sunt, rem totam corporis a, incidunt necessitatibus illo
          dolorum qui minima explicabo eligendi veniam optio? Similique a quod
          eaque numquam magnam quaerat qui dolorem recusandae iste doloribus
          dolor doloremque laborum commodi, praesentium porro veritatis
          quibusdam consequuntur est nam exercitationem impedit voluptatum.
          Ducimus nesciunt cupiditate id hic voluptatibus deserunt aliquid esse
          doloremque explicabo, fuga quaerat labore eveniet animi nemo illum
          recusandae rerum, non ullam temporibus et, commodi facilis enim.
          Consectetur facere tenetur ipsam aspernatur facilis totam debitis quo
          eveniet voluptatum eos impedit itaque placeat doloribus ad minus, quas
          amet. Iure expedita in quo veniam distinctio dignissimos perferendis
          quam earum recusandae, asperiores, maxime voluptatum voluptas dolorem
          mollitia, dolore molestias hic. Quaerat consequuntur dolor mollitia
          magnam doloribus obcaecati a laboriosam cum animi quam. Eligendi, quam
          perferendis asperiores esse voluptatibus architecto id dolorem iusto
          commodi veritatis tempora officiis pariatur beatae quibusdam quo
          placeat dolores reprehenderit perspiciatis illo magni natus nesciunt
          libero dicta. Autem optio debitis ipsa possimus atque aspernatur
          sapiente magni officiis ad explicabo tempora rerum recusandae, odit
          necessitatibus suscipit blanditiis cumque nobis placeat dolor itaque
          libero id. Consequatur eum culpa obcaecati repellendus perferendis!
          Nesciunt laudantium exercitationem sit minima rerum, doloribus numquam
          commodi sapiente! Animi voluptatem suscipit itaque sequi excepturi
          nostrum inventore placeat voluptates nesciunt, cum voluptate fugiat
          esse deleniti, adipisci consequatur recusandae quibusdam iusto. Sequi
          cupiditate consectetur hic cum repellendus quos aspernatur harum
          aliquam ratione! Aliquid dolores odit totam exercitationem suscipit
          pariatur debitis quaerat cum, sapiente quam magni quibusdam laborum
          rerum delectus odio accusantium eligendi fuga explicabo libero! Labore
          quos unde deserunt in neque ipsum, tempora, a cumque fugiat et non?
          Pariatur voluptate inventore aliquam corrupti, natus eos error officia
          cupiditate amet id voluptatibus in reiciendis dolore ad sit nulla
          cumque ducimus debitis explicabo, enim perferendis, deserunt nostrum
          consequatur aliquid. Vitae sint quo, dignissimos officiis doloremque
          debitis nihil repellendus a deleniti totam, animi, suscipit enim nulla
          explicabo delectus iusto doloribus. Laboriosam assumenda quibusdam
          blanditiis non alias sunt illo vero dolorem, reiciendis aut nemo,
          itaque veritatis error consequatur praesentium libero cumque. Velit
          quae culpa temporibus illo accusamus libero tenetur vero fuga earum
          ut, error voluptate nisi ducimus perspiciatis asperiores dignissimos
          maiores provident ipsa magni ipsam reiciendis illum unde odit amet.
          Nesciunt earum voluptatum iste cum laborum sed quaerat, voluptates
          eius? Eaque, omnis nam, neque a nostrum ea libero alias fugiat beatae
          molestiae velit odit consectetur sint rem deleniti. Voluptatem
          consequatur temporibus illum at cum expedita voluptatum ratione
          quisquam sequi non, quos mollitia aperiam ad repellat asperiores
          fugiat possimus eligendi quam voluptate quae atque! Suscipit obcaecati
          deserunt, voluptatum ut natus fugit explicabo aspernatur ad quis porro
          odio. Deserunt non doloribus, ipsum alias fuga deleniti, reiciendis
          labore aspernatur beatae veniam ratione sed voluptatum quasi, rem
          ducimus quo pariatur adipisci consequuntur cum. Iusto tempora quae
          sit, veritatis temporibus aperiam ratione fuga eum nam incidunt omnis
          ea dolores beatae, quod minus quasi nesciunt! Quod dolor, optio
          obcaecati veniam debitis et iure, ipsa impedit cum provident libero
          ipsum? Ea doloremque iure labore tempora, eos ratione tempore modi
          voluptas fugit eum, quisquam eveniet aspernatur maiores corporis,
          asperiores voluptate mollitia? Aliquam adipisci autem numquam nostrum
          praesentium eius qui labore enim. Similique ipsum adipisci at debitis
          quisquam accusamus deserunt, modi possimus veniam voluptatibus
          accusantium dolore autem sint quibusdam corporis fuga aliquid saepe
          nam explicabo commodi. Dolorum laboriosam voluptatum amet reiciendis
          neque fugit fuga, quod in tempora sequi tempore ratione sit, ullam
          cumque harum mollitia assumenda animi ad eaque quaerat. Eaque neque
          ullam mollitia labore sequi porro delectus autem quo inventore, ad
          voluptatibus sit illo distinctio totam reprehenderit harum et possimus
          quam hic blanditiis rem. Aliquam molestiae porro non iusto molestias,
          accusamus voluptates dolorem, sunt repellendus sed, esse assumenda
          quia deserunt voluptatem officiis consequuntur ratione magni
          consectetur ex. Doloribus commodi enim cumque ipsa nam asperiores,
          possimus consequatur ducimus sint, tempore repellat repudiandae eaque
          minus assumenda, quo corporis quas quibusdam saepe. Beatae est eius
          cupiditate similique iusto, unde a accusantium dolorem, quas iure odio
          ut voluptas commodi quisquam id libero totam omnis dolore rerum.
          Assumenda labore a debitis aliquid? Veniam voluptas recusandae eveniet
          rem similique repellendus possimus ad eos eaque at! Odio repudiandae
          tempora quas sunt velit architecto nesciunt molestias! Ipsam quas
          ratione tempora incidunt. Facilis tempora quia quidem nisi qui eveniet
          numquam ullam sunt voluptas provident? Mollitia dolorum beatae
          consectetur, vel, blanditiis obcaecati sed officia soluta nobis
          asperiores voluptatibus quas similique iusto consequuntur, nesciunt
          iste dignissimos amet! Est necessitatibus doloribus optio, placeat
          cumque dicta nam officia hic, nulla facilis accusantium deserunt
          architecto dolores consequatur beatae voluptas quae. Rem sint repellat
          cum possimus, blanditiis aspernatur cupiditate culpa sunt sed,
          assumenda molestias labore dolor cumque, optio quaerat! Ratione nemo
          numquam praesentium, commodi mollitia quasi veritatis perspiciatis
          quisquam, quibusdam itaque dolorum expedita labore ab. Earum ea
          quisquam, odit autem quod tenetur, voluptatum exercitationem eveniet
          totam quidem, optio magnam explicabo quia inventore placeat eos sit.
          Ab autem, itaque ipsa consectetur reiciendis, unde quas distinctio
          recusandae, debitis quis eum illo? Officiis sapiente repellat, aliquam
          assumenda fuga, praesentium, laudantium quasi quibusdam dolores iure
          consectetur est nobis? Vitae odio officia itaque minus repellat fuga
          ipsum fugiat et quia quos tenetur, dolore a temporibus assumenda iure,
          amet soluta sit blanditiis. Et nam accusantium nulla, ipsam ea quod
          debitis dicta ipsa sequi quas sint ipsum! Omnis sed natus amet atque
          eum eaque, provident quaerat earum iusto corporis dignissimos. Dolor
          eligendi iusto reiciendis ipsa provident consequuntur architecto at
          nulla distinctio hic sequi quasi deleniti id error excepturi quidem,
          beatae possimus accusantium tempore aliquid? Numquam itaque distinctio
          culpa fugiat, beatae dolor, maxime veritatis nulla a voluptatum hic in
          ipsa obcaecati rem laborum molestiae assumenda autem ea. Ducimus
          tenetur dignissimos reprehenderit molestiae quisquam accusantium animi
          assumenda alias velit officiis ullam eum iure, similique odit eos
          facere est obcaecati maiores, a unde sunt modi dicta? Culpa totam
          voluptates alias inventore! Doloremque necessitatibus et optio
          voluptas laboriosam ipsum enim. Dolorem tempore dolore ex velit, quae
          maiores, ullam alias eum consequatur iusto nesciunt accusamus. Debitis
          consectetur, adipisci possimus incidunt laudantium mollitia tempora!
          Sed ullam neque asperiores culpa debitis totam eveniet delectus unde.
          Harum ipsa numquam voluptatem suscipit, velit eum quos est aliquid et
          ex iusto necessitatibus quo quaerat animi ipsum, porro vel dolore!
          Similique amet consequuntur animi soluta nihil voluptatem
          reprehenderit. Odio et facilis cum quia numquam maiores voluptatem nam
          error animi necessitatibus minima distinctio nobis eaque excepturi
          reiciendis esse iusto commodi quaerat optio expedita, consequuntur
          quas nisi rem? Provident autem velit rem laboriosam, molestiae
          possimus tenetur, modi omnis atque, sed sit! Cum rerum architecto
          omnis, id, soluta vel, possimus quaerat numquam ipsa quidem atque ea
          aperiam officia ducimus voluptatibus eius magnam. Nisi asperiores
          consequuntur nemo placeat natus doloribus quam eligendi debitis
          numquam, mollitia nostrum recusandae deleniti, aperiam aspernatur sit
          esse, minima alias magnam tenetur! Voluptatum molestias consequuntur,
          sapiente explicabo fuga ullam hic ipsa voluptas expedita, cumque in
          voluptatem cum ducimus accusamus. Cupiditate, repellendus itaque velit
          molestias ullam vero recusandae natus ex, repudiandae ipsum est
          voluptate odit deserunt suscipit. Quod molestias sapiente nobis enim,
          dignissimos, expedita similique sint a aliquam velit fuga! Labore
          assumenda magnam provident autem consequuntur deserunt quam. Possimus,
          quasi sequi optio cupiditate minima provident quod exercitationem
          voluptates facere harum, beatae officia molestiae! Nulla quam,
          temporibus, dolores quisquam ducimus aliquid aut, eius assumenda
          consequatur tempore veniam adipisci nihil repudiandae iusto voluptatum
          id quos magni repellat veritatis amet. Velit porro, facere quis
          mollitia provident autem quisquam quaerat? Deserunt sunt nesciunt
          delectus molestiae. Excepturi consectetur quisquam quod nulla, ab ea
          enim dignissimos, est tenetur commodi nisi esse molestiae totam saepe
          sint dolorem ratione similique. Perspiciatis esse quod reiciendis
          aspernatur in unde beatae ullam doloribus fugiat labore officiis
          commodi, dolores magnam voluptatum. Aspernatur dicta ut quo placeat
          praesentium numquam consequatur pariatur similique alias blanditiis
          tempora, ex error voluptatem nobis sed illum possimus perspiciatis
          assumenda esse modi? Hic iste corrupti perspiciatis error quia
          maiores, optio expedita id ipsa eligendi eveniet blanditiis esse
          natus? Dicta veritatis cumque quasi obcaecati rem deserunt magnam
          consequatur aspernatur sequi voluptatibus alias, esse adipisci
          perspiciatis, totam facere? Dolore beatae animi laboriosam sint,
          reprehenderit accusamus ratione. Aliquid quam autem id velit
          asperiores blanditiis, saepe ex labore nobis magnam quia? Similique
          commodi in quis ipsa voluptatem eligendi qui dolorem nihil facilis
          officia. Perspiciatis quod ducimus voluptatem sit et modi cumque
          debitis? Unde modi aliquid provident voluptatem quibusdam doloribus
          consectetur excepturi? Blanditiis repudiandae fugit quos fuga nostrum
          corrupti non impedit iste incidunt. Iusto enim in nemo iste fugiat
          sequi quia perferendis officiis ducimus accusamus eius, voluptates
          quisquam ad quasi voluptatem commodi, vel voluptatibus maxime.
          Recusandae impedit necessitatibus voluptas labore beatae ad
          dignissimos, dolore veritatis alias reprehenderit exercitationem.
          Magnam, eos recusandae. Voluptas ad debitis velit consectetur optio
          earum laboriosam, maxime et magni sapiente atque exercitationem rem
          provident ea? Aperiam optio sint consectetur ullam reiciendis pariatur
          iusto aspernatur eaque quo autem, nostrum aliquid alias earum error
          nisi ipsa sunt quas cupiditate ab molestiae deserunt at ad debitis
          esse? Repudiandae hic temporibus ullam ipsa ex id cupiditate iure,
          aliquid dolore, a voluptatem quis tempore fugiat labore necessitatibus
          reprehenderit vitae unde recusandae nostrum accusamus perspiciatis quo
          error! Qui, enim libero? Alias nulla nostrum, non tempora atque
          officia consequuntur minus blanditiis cum soluta sit praesentium iste
          neque magnam temporibus quia iure placeat, asperiores doloribus quasi
          maxime perspiciatis natus? Maiores voluptate esse perspiciatis nihil
          deleniti, quam tenetur doloribus consequuntur temporibus reiciendis
          iste atque debitis similique sed, nesciunt cumque tempora placeat!
          Eius vel quo at adipisci laboriosam deleniti quod ut ipsam odio,
          corporis, ab quas tempore totam quibusdam eaque consequuntur neque,
          placeat accusamus doloremque rem! Ratione, praesentium sint? At
          accusamus dicta inventore nobis laboriosam illum voluptatum sint, ipsa
          atque natus velit, possimus molestiae quis. Magnam laborum aliquam
          asperiores voluptatem sit? Iste error molestiae quae ducimus repellat
          pariatur deserunt corrupti ad, consectetur, quos animi sequi iure
          dolor tempora laborum ratione dolorum quod aut dignissimos adipisci
          repudiandae suscipit vel! Fugit impedit est iure repudiandae omnis?
          Quae libero, ullam vel natus commodi sint aspernatur facere! Dolorum
          facere natus illum ducimus a, rerum architecto excepturi labore
          sapiente laudantium. Neque fugiat accusantium consequuntur tempore,
          reprehenderit molestias amet dicta veritatis vero. Quas id
          exercitationem quisquam saepe voluptates dolore! Blanditiis aspernatur
          minus beatae reprehenderit libero corporis dolor qui, obcaecati
          laborum quos impedit consequatur, fugiat fugit exercitationem
          doloremque. Similique nisi consequatur voluptatibus est in mollitia
          reiciendis odit minima quos earum, doloremque voluptate aliquam sequi
          nostrum veritatis perspiciatis dignissimos at explicabo unde delectus
          enim placeat, possimus alias aperiam! Eum cumque id, veniam totam
          exercitationem minima rerum quis ratione, iusto consequuntur dolores
          magnam officia. Distinctio ea unde repudiandae necessitatibus nemo
          beatae iusto odio vitae. Eaque adipisci labore quisquam? Amet
          reprehenderit dolore, culpa libero laborum magnam saepe adipisci
          consequatur. Obcaecati itaque ipsam aliquam illo amet exercitationem
          numquam ipsum dolorem minus iusto rerum ipsa iure, sint aliquid, cum
          sapiente incidunt nisi harum omnis aspernatur neque veniam! Quis esse
          corrupti commodi necessitatibus aut cupiditate illo placeat quaerat
          est. Ea necessitatibus id laborum dolorem delectus recusandae eveniet
          velit est consequuntur. Necessitatibus, accusamus? Asperiores maxime
          at provident labore eveniet. Accusantium at provident sequi eum
          voluptates, cumque temporibus, ad, commodi similique quibusdam quod et
          recusandae placeat iste aliquid? Ab amet voluptate saepe dignissimos
          eius iusto incidunt. Quidem sint suscipit enim molestiae dicta
          blanditiis reprehenderit quisquam optio vel, dolorum illum fuga
          ducimus, amet perferendis itaque, consequatur unde? Labore ab
          aspernatur ex, recusandae tempore laudantium, molestias quibusdam
          temporibus hic corrupti molestiae earum tenetur. Cum, quod explicabo.
        </div>
      </div>
 
   
    </>
  );
}

export default App;
