app.controller('MainController', ['$scope', function($scope) { 
  $scope.comments = [];
  $scope.add = () => {
    if($scope.title){
      $scope.comments.push($scope.title);
    }
  }
  
  $scope.delete = () => {
  $scope.comments.splice(this.$index, 1);
  };
  
  $scope.paragraphs = [
  { 
    text1: "Dlouhodobé sucho a vedro oslabují tuzemské stromy. Hrozba se nevyhýbá ani českému národnímu stromu – lípě. A to přesto, že se díky hlubokým kořenům dožívá často několika set let. Vedra tak mohou zásadně změnit druhovou skladbu stromů v zeleni mimo les. Místo lip a javorů budeme ve městech potkávat třeba akáty, katalpy a dřezovce. Tyto dřeviny jsou lépe adaptované na sucha – mají například na spodní straně listů drobné chloupky, takže lépe regulují výdej vody.",
    
  }, 
  { 
    text2: "Jejich kořeny se také lépe dostávají k vodě,“ vysvětluje Jaroslav Kolařík, arborista společnosti Safe Trees, která se současnými problémy zabývá.Náklady na péči o stromy v ulicích obcí a podél cest a tratí výrazně stoupnou. „Odhadujeme, že v jednom roce se může jednat o částku přesahující miliardu korun,“ říká Kolařík. Na prvním místě je zachování stávajících stromů. V ohrožení je jich naprostá většina, a to na celé ploše republiky, trpí hlavně kvůli nedostatku srážek. Kvůli poklesu hladiny spodních vod mají problémy i dřeviny, které mají hluboký kořenový systém. Náklady na aklimatizační péči po výsadbě, úpravu stanovišť, kde stromy rostou, a důslednou ochranu dřevin tak porostou. Počítat se také musí s častější výměnou odumřelých a strádajících jedinců, i jejich kontrol bude víc. Stromy totiž mohou být oslabené a nebezpečné pro okolí, což právě může být případ staletých lip a dalších dlouhodobě žijících mohutných stromů."
  }, 
];
  $scope.posted = " Zveřejněno  1 července, 2019 ve 13:00";
  $scope.posttitle = "Kvůli suchu a vedru mohou z krajiny zmizet lípy";
  
}]); 
