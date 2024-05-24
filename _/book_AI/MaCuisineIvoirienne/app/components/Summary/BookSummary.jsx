import Link from "next/link"

export default function BookSummary() {

  const json_summary = {
    "Titre H1": {
      "Titre H2": [
        "titre h3 a"
        , "titre h3 b"
        , "titre h3 c"
      ]
      , "Titre H2": [
        "titre h3 d"
        , "titre h3 e"
        , "titre h3 f"
      ]
    }    
  }
  , summaryObj = {
    "Remerciements": []
    , "Préface": []
    , "Introduction": []
    , "Plats & Sauces": [
      "Alloco", "Alloco huile rouge ", "Atchoufo kwi", "Anttiéké-poisson", "Biekosseu", "Cocotcha", "Etchoufô fofo tchonson", "Foue n'gna", "Garba", "Gazegnoumongnou & A gnousaka", "Gblogblo saka", "Gbolou tro", "Gbrénfri", "Gouagouassou", "Kaklou", "Kapobge", "Kédjénou de poulet", "Kope", "Kope à l'huile rouge", "Kplala", "Lolognoumongnou", "Mankou fiolo", "N'tro", "Nandji", "Niguéma", "Foisson braise", "Poulet braise", "Riz au soumbara ", "Sauce arachide", "Sauce aux feuilles de patates douces", "Sauce djoumblé", "Sauce grangnan", "Sauce gnangnan sec", "Sance graine", "Sauce graine su djoumblé", "Sauce kplé", "Sauce pistache ", "Siokohi lokosoukouè", "Soupe du pécheur", "Yedidongofow", "Zohoun seka-tikliti"
    ]
    , "Beignets & Desserts": [
      "Agba claclo", "Aller-retour", "Banane braisés & arachides", "Beignets \"jaune jaune\"", "Claclo", "Coco baca", "Dèguè", "Gbofloto", "Gbofloto sucré", "Gnonmi", "Tratra"
    ]
    , "Jus": [
      "Bissap","Gnamankoudji","Tomidji"
    ]
    , "Ingrédients": []
  }
  
  return <section>
    <h2>Sommaire</h2>
    {Object.keys(summaryObj).map((item,i) => <>
      <h3>{item}</h3>
      {!!summaryObj[item].length && summaryObj[item].map((subItem,i) => <>
        <h4><Link href="#">{subItem}</Link></h4>
      </>)}
    </>)}
    
  </section>
}
/*

Sommaire

--Remerciements
7
--Préface
8
--Introduction
12
--Plats & Sauces
15

Alloco
17

Alloco huile rouge 
19

Atchoufo kwi
21

Anttiéké-poisson
23

Biekosseu
25

Cocotcha
27

Etchoufô fofo tchonson
29

Foue n'gna
31

Garba
33

Gazegnoumongnou & A gnousaka
35

Gblogblo saka
37

Gbolou tro
39

Gbrénfri
41

Gouagouassou
43

Kaklou
45

Kapobge
47

Kédjénou de poulet
49

Kope
51

Kope à l'huile rouge
53

Kplala
55

Lolognoumongnou
57

Mankou fiolo
59

N'tro
61

Nandji
63

Niguéma
65

Foisson braise
67

Poulet braise
69

Riz au soumbara 
71

Sauce arachide
73

Sauce aux feuilles de patates douces
75

Sauce djoumblé
77

Sauce grangnan
79

Sauce gnangnan sec
81

Sance graine
83

Sauce graine su djoumblé
85

Sauce kplé
87

Sauce pistache 
89

Siokohi lokosoukouè
91

Soupe du pécheur
93

Yedidongofow
95

Zohoun seka-tikliti
97








--Beignets & Desserts
99

Agba claclo
101

Aller-retour
103

Banane braisés & arachides
105

Beignets "jaune jaune"
107

Claclo
109

Coco baca
111

Dèguè
113

Gbofloto
115

Gbofloto sucré
117

Gnonmi
119

Tratra
121









--Jus
123

Bissap
125

Gnamankoudji
127

Tomidji
129









--Ingrédients
130

*/