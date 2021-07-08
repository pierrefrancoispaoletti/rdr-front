import {
  faBeer,
  faCocktail,
  faCookieBite,
  faGlassCitrus,
  faGlassWhiskeyRocks,
  faHatChef,
  faMeat,
  faPepperHot,
  faSalad,
  faWineBottle,
} from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const categories = [
  {
    name: "La Cuisine",
    slug: "cuisine",
    icon: (
      <FontAwesomeIcon
        size="4x"
        icon={faHatChef}
        style={{
          "--fa-primary-color": "#AF2127",
          "--fa-secondary-color": "grey",
        }}
      />
    ),
    subCategories: [
      {
        name: "Les Entrées",
        slug: "entrées",
        icon: (
          <FontAwesomeIcon
            size="3x"
            icon={faSalad}
            style={{ "--fa-primary-color": "darkred" }}
          />
        ),
      },
      {
        name: "Les Tapas",
        slug: "tapas",
        icon: (
          <FontAwesomeIcon
            size="3x"
            icon={faPepperHot}
            style={{ "--fa-primary-color": "darkred" }}
          />
        ),
      },
      {
        name: "Les Plats",
        slug: "plats",
        icon: (
          <FontAwesomeIcon
            size="3x"
            icon={faHatChef}
            style={{ "--fa-primary-color": "darkred" }}
          />
        ),
      },
      {
        name: "Les Desserts",
        slug: "dessert",
        icon: (
          <FontAwesomeIcon
            size="3x"
            icon={faCookieBite}
            style={{ "--fa-primary-color": "darkred" }}
          />
        ),
      },
    ],
  },
  {
    name: "Les Vins",
    slug: "vins",
    icon: (
      <FontAwesomeIcon
        icon={faWineBottle}
        size="4x"
        style={{
          "--fa-primary-color": "#AF2127",
          "--fa-secondary-color": "grey",
        }}
      />
    ),
    subCategories: [
      {
        name: "Vins Rouges",
        slug: "rouges",
        icon: (
          <FontAwesomeIcon
            size="3x"
            icon={faWineBottle}
            style={{ "--fa-primary-color": "darkred" }}
          />
        ),
        subCat: [
          {
            name: "Patrimonio",
            slug: "patrimonio-r",
          },
          {
            name: "Ajaccio",
            slug: "ajaccio-r",
          },
          {
            name: "Balagne",
            slug: "balagne-r",
          },
          {
            name: "Oriente",
            slug: "oriente-r",
          },
          {
            name: "Coteaux du Cap-Corse",
            slug: "cap-corse-r",
          },
          {
            name: "Sarténe",
            slug: "sarténe-r",
          },
          {
            name: "Figari",
            slug: "figari-r",
          },
        ],
      },
      {
        name: "Vins Rosés",
        slug: "roses",
        icon: (
          <FontAwesomeIcon
            size="3x"
            icon={faWineBottle}
            style={{ "--fa-primary-color": "#fec5d9" }}
          />
        ),
      },
      {
        name: "Vins Blancs",
        slug: "blancs",
        icon: (
          <FontAwesomeIcon
            size="3x"
            icon={faWineBottle}
            style={{ "--fa-primary-color": "#f1f285" }}
          />
        ),
        subCat: [
          {
            name: "Patrimonio",
            slug: "patrimonio-b",
          },
          {
            name: "Ajaccio",
            slug: "ajaccio-b",
          },
          {
            name: "Balagne",
            slug: "balagne-b",
          },
          {
            name: "Oriente",
            slug: "oriente-b",
          },
          {
            name: "Coteaux du Cap-Corse",
            slug: "cap-corse-b",
          },
          {
            name: "Sarténe",
            slug: "sarténe-b",
          },
          {
            name: "Figari",
            slug: "figari-b",
          },
        ],
      },
    ],
  },
  {
    name: "Les Bières",
    slug: "bieres",
    icon: (
      <FontAwesomeIcon
        size="4x"
        icon={faBeer}
        style={{
          "--fa-primary-color": "#AF2127",
          "--fa-secondary-color": "grey",
        }}
      />
    ),
  },
  {
    name: "Les Alcools",
    slug: "alcools",
    icon: (
      <FontAwesomeIcon
        size="4x"
        icon={faGlassWhiskeyRocks}
        style={{
          "--fa-primary-color": "#AF2127",
          "--fa-secondary-color": "grey",
        }}
      />
    ),
    subCategories: [
      {
        name: "Les Apéritifs",
        slug: "apéritifs",
        icon: (
          <FontAwesomeIcon
            size="3x"
            icon={faGlassWhiskeyRocks}
            style={{ "--fa-primary-color": "#f1f285" }}
          />
        ),
      },
      {
        name: "Les Whiskys",
        slug: "whiskys",
        icon: (
          <FontAwesomeIcon
            size="3x"
            icon={faGlassWhiskeyRocks}
            style={{ "--fa-primary-color": "#f1f285" }}
          />
        ),
      },
      {
        name: "Les Rhums",
        slug: "rhums",
        icon: (
          <FontAwesomeIcon
            size="3x"
            icon={faGlassWhiskeyRocks}
            style={{ "--fa-primary-color": "#f1f285" }}
          />
        ),
      },
      {
        name: "Les Vodkas",
        slug: "vodkas",
        icon: (
          <FontAwesomeIcon
            size="3x"
            icon={faGlassWhiskeyRocks}
            style={{ "--fa-primary-color": "#f1f285" }}
          />
        ),
      },
      {
        name: "Les Gins",
        slug: "gins",
        icon: (
          <FontAwesomeIcon
            size="3x"
            icon={faGlassWhiskeyRocks}
            style={{ "--fa-primary-color": "#f1f285" }}
          />
        ),
      },
      {
        name: "Les Digéstifs",
        slug: "digéstifs",
        icon: (
          <FontAwesomeIcon
            size="3x"
            icon={faGlassWhiskeyRocks}
            style={{ "--fa-primary-color": "#f1f285" }}
          />
        ),
      },
    ],
  },
  {
    name: "Les Cocktails",
    slug: "cocktails",
    icon: (
      <FontAwesomeIcon
        size="4x"
        icon={faCocktail}
        style={{
          "--fa-primary-color": "#AF2127",
          "--fa-secondary-color": "grey",
        }}
      />
    ),
  },
  {
    name: "Les Softs",
    slug: "softs",
    icon: (
      <FontAwesomeIcon
        size="4x"
        icon={faGlassCitrus}
        style={{
          "--fa-primary-color": "#AF2127",
          "--fa-secondary-color": "grey",
        }}
      />
    ),
  },
];

export default categories;
