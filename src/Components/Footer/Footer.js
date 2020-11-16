import React from "react";
import ColmenitaIcon from "../Nav/ColmenitaIcon"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    footer: {
      color: theme.palette.secondary.light,
      // background: `linear-gradient(#fff, ${theme.palette.secondary.main})`,
      background: theme.palette.primary.main,
      boxShadow: `0 -5px 10px -1px rgba(0,0,0,.2)`,
      padding: '12px',
      transition: "all 300ms ease-in",
      minHeight: '400px',
    },
    footerRow: {
      padding: '0',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    footerCopyright: {
      padding: '20px 0'
    },
    sponsor: {
      listStyle: 'none',
      padding: '4px 24px',
      transition: 'all 150ms ease-in',
      '& a': {
        textDecoration: 'none'
      },
      '&:hover': {
        transform: 'scale(1.01)',
        filter: 'saturate(0)'
      }
    }
  })
)

export default function Footer() {
  const classes = useStyles();
  const Sponsor = ({sponsorImgixId, name, href, size=45}) => 
  <li className={classes.sponsor}>
    <a title={name} href={href} target="_blank" rel="noreferrer">
      <img src={`https://lacolmenita.imgix.net/${sponsorImgixId}.png?height=${size}&format=webp`} alt={name} height={`${size}px`}/>
    </a>
  </li>

  return (
    <div className={classes.footer}>
      <div className={classes.footerRow}>
        <ColmenitaIcon size={340} dark description/>
      </div>
      <ul className={classes.footerRow}>
        <Sponsor 
          name="Ministerio de Cultura de la República Cuba" 
          sponsorImgixId="A6ZpBWJ"
          href="http://www.mincult.gob.cu/"/>
        <Sponsor 
          name="Departamento de Artes Escénicas del Mincult"
          sponsorImgixId="JijbeAx"
          href="http://www.cubaescena.cult.cu/"/>
        <Sponsor 
          name="Centro de Teatro de Cuba"
          sponsorImgixId="JQaNqxv"
          href="http://www.cubaescena.cult.cu/"/>
        <Sponsor 
          name="Fondo de las Naciones Unidas para la Infancia (Unicef)"
          sponsorImgixId="yWPqlIx"
          href="https://www.unicef.org/"/>
        <Sponsor 
          name="Grupo Excelencias"
          sponsorImgixId="yvvpUIo"
          href="http://www.excelencias.com/"/>
      </ul>
      <div className={classes.footerRow}>
       <span className={classes.footerCopyRight}>© 2020 La Colmenita de Cuba. Todos los derechos reservados</span>
      </div>
    </div>
  )
}