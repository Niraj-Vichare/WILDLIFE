import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../Wildlife/Wildlife.css'
import Display from '../../component/Display/Display'

const Wildlife=()=> {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  return (
    <>
    <div className='project-1'>
      <Display 
      image="tiger2.jpg" 
      width='550px'
      text="In 1973, Project Tiger was launched in the Palamau Tiger Reserve, Jim Corbett National Park, Uttarakhand. 
      This is a centrally sponsored scheme of the Ministry of Environment and Forests. 
      It is primarily governed under the Wildlife Act, 1972 itself.
      The project is administered by the National Tiger Conservation Authority, which was established in December 2005. 
      The aim of the project is the protection of tigers from extinction, by ensuring that there is a viable population of the species in their natural habitats. 
      The Project began from nine reserves in 1973-74 and has substantially grown to fifty reserves. 
      The Project has seen significant success in the recovery of the habitat and the population of the tigers in the reserved areas. " 
  
      color="#33f333"
      
      />


    </div>
    <div className="project-2" data-aos="fade-up">
      <Display 
      image="elephant.jpg" 
      width='550px'
      text="Project Elephant was launched in 1992 and is a centrally sponsored scheme. 
      Elephants face the threat of attrition, as opposed to extinction faced by Tigers. 
      The project aims at assisting the management and protection of elephants in the States which have free-ranging populations of wild elephants. 

      The Elephants Preservation Act, 1879 has also been formulated for the protection of elephants across the country. 
      India has over 27,000 elephants spread over 26 elephant reserves but only 65% of the elephant corridors are in protected areas. 
      The protection of elephants is also important because it has been declared as a national heritage of the country. 
      This was done by the Government of India in 2010 after the Standing Committee on the National Board of Wildlife gave its recommendations. 
      This step was taken to create awareness about the dwindling population of the elephants so that people would actively participate in its conservation." 
      className="project-2"
      color="#4343ff"/>
    </div>
    <div className="project-3"  data-aos="fade-up-right">
      <Display 
      image="Hangul.jpg" 
      width='550px'
      text="In the 1970s, the Jammu and Kashmir Government in association with the International Union for Conservation of Nature (IUCN) and World Wildlife Fund (WWF) designed a project for the protection and conservation of the Kashmir Red Stag and its habitat. 
      This project came to be known as Project Hangul.
      Hangul or Kashmir Red Stag is a subspecies of the Central Asian Red Deer, which is native to northern India.
      It is mostly found in the dense riverine forests of Kashmir Valley, some parts of Himachal Pradesh, Sindh Valley, Dachigam National Park and in the forests of Kishtwar. It is also the state animal of Jammu and Kashmir. The project was started since Hanguls were enlisted in the critically endangered species list prepared by IUCN. 
      The species is scattered through an area of 141 square kilometres in the Dachigam National Park." 
      className="project-3"
      color="#994646"/>
    </div>
    <div className="project-4"  data-aos="fade-up-left">
      <Display 
      image="crocodile.jpg" 
      width='550px'
      text="The species of crocodilians was threatened in India due to the increasing number of indiscriminate killings. They were poached for commercial purposes, which led to a drastic decline in their population. Apart from this, there was a loss of habitat due to the increasing development projects and industrialization.

      In light of this situation, Project Crocodile was introduced in 1975. The primary focus was on breeding and rearing in captivity. The initiative was taken by the Government of India in association with the Food and Agriculture Organization and United Nations Development Fund.  Due to the implementation of this project, there is an increase in the population of crocodiles, which has saved them from extinction. The protected areas include National Chambal Sanctuary and Katerniaghat Wildlife Sanctuary." 
      className="project-2"
      color="rgb(225 200 166)"/>
    </div>
    <div className="project-5" data-aos="fade-up-right">
      <Display 
      image="snow-leopard.jpg" 
      width='550px'
      text="The Indian Leopard (Panthera pardus fusca), once widely distributed across the Indian subcontinent, has in recent years come under threat. Due to a variety of factors such as habitat encroachment, rapid urbanization, and man-animal conflict, they are becoming increasingly rare outside the bounds of designated nature preserves and protected areas.
      Males average between 4 ft 2 in (127 cm) and 4 ft 8 in (142 cm) in length and weigh between 110 and 170 lb (50 and 77 kg). Females are slightly smaller averaging between 3 ft 5 in (104 cm) and 3 ft 10 in (117 cm) in length and weigh between 64 and 75 lb (29 and 34 kg).
      Leopards have inhabited the areas surrounding Maharashtra since time immemorial as an integral part of the landscape. Until recently, when their habitat, consisting primarily of scrub jungle abundant with small prey, started to be destroyed by development. What was once a leopard haven, has now changed drastically since the expansion of sugar cane cultivation in these areas."
      color="#ffdf41"
      className="project-2"/>
    </div>
    </>
  )
}

export default Wildlife