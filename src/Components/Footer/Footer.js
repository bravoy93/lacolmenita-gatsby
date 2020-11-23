import React from "react";
import ColmenitaIcon from "../Custom/ColmenitaIcon/ColmenitaIcon"
import { makeStyles } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    footer: {
      color: theme.palette.secondary.light,
      // background: `linear-gradient(#fff, ${theme.palette.secondary.main})`,
      background: theme.palette.primary.main,
      boxShadow: `0 -5px 10px -1px rgba(0,0,0,.2)`,
      padding: '12px',
      transition: "all 300ms ease-in",
      width: '100%'
    },
    footerRow: {
      padding: '0',
      margin: '0',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    },
    footerCopyright: {
      padding: '20px 0',
      textAlign: 'center',
      [theme.breakpoints.only('xs')]: {
        paddingTop: '30px'
      }
    },
    sponsor: {
      listStyle: 'none',
      padding: '0 24px 4px 24px',
      transition: 'all 150ms ease-in',
      '& a': {
        textDecoration: 'none'
      },
      '&:hover': {
        transform: 'scale(1.01)',
        filter: 'saturate(0)'
      },
      [theme.breakpoints.between('xs','sm')]: {
        padding: '0 14px 14px 14px',
      }
    },
    socialNetwork: {
      listStyle: 'none',
      padding: '4px 8px',
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
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down('xs'));
  const sm = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const FooterItem = ({type='sponsor',itemImgixId, name, href, size= xs ? 38 : sm ? 40 : 45}) => 
  <li className={classes[type]}>
    <a title={name} href={href} target="_blank" rel="noreferrer">
      <img src={`https://lacolmenita.imgix.net/${itemImgixId}.png?height=${size}&format=webp`} alt={name} height={`${size}px`}/>
    </a>
  </li>

const SponsorsContainer = ({children}) => 
  xs ?
    <>
      <ul className={classes.footerRow}>{children.slice(0,3)}</ul>
      <ul className={classes.footerRow}>{children.slice(3)}</ul>
    </>
    : <ul className={classes.footerRow}>{children}</ul>

  return (
    <div className={classes.footer}>
      <div className={classes.footerRow}>
        <ColmenitaIcon size={xs ? 310 : 340} dark description/>
      </div>
      <SponsorsContainer>
        <FooterItem 
          name="Ministerio de Cultura de la República Cuba" 
          itemImgixId="A6ZpBWJ"
          href="http://www.mincult.gob.cu/"/>
        <FooterItem 
          name="Departamento de Artes Escénicas del Mincult"
          itemImgixId="JijbeAx"
          href="http://www.cubaescena.cult.cu/"/>
        <FooterItem 
          name="Centro de Teatro de Cuba"
          itemImgixId="JQaNqxv"
          href="http://www.cubaescena.cult.cu/"/>
        <FooterItem 
          name="Fondo de las Naciones Unidas para la Infancia (Unicef)"
          itemImgixId="yWPqlIx"
          href="https://www.unicef.org/"/>
        <FooterItem 
          name="Grupo Excelencias"
          itemImgixId="yvvpUIo"
          href="http://www.excelencias.com/"/>
      </SponsorsContainer>
      <div className={classes.footerRow}>
  <span className={classes.footerCopyright}>© 2020 La Colmenita de Cuba. Todos los derechos reservados.</span>
      </div>
      <ul className={classes.footerRow}>
        <FooterItem
          type="socialNetwork"
          name="Página de La Colmenita en Facebook" 
          itemImgixId="Ga51pqU"
          size={32}
          href="https://www.facebook.com/La-Colmenita-de-Cuba-101503491317669/"/>
        <FooterItem 
          type="socialNetwork"
          name="Perfil de La Colmenita en Twitter"
          itemImgixId="gafQdPg"
          size={32}
          href="https://twitter.com/ColmenitaDe"/>
        <FooterItem 
          type="socialNetwork"
          name="Perfil de La Colmenita en Instagram"
          itemImgixId="JmlqTqF"
          size={32}
          href="http://www.instagram.com/colmenitacubana"/>
        <FooterItem 
          type="socialNetwork"
          name="Canal de La Colmenita en Youtube"
          itemImgixId="7PI6BsH"
          size={32}
          href="https://www.youtube.com/channel/UCkYqTQtkHILK3lVFzyq-lxA"/>
        <FooterItem 
          type="socialNetwork"
          name="Canal de La Colmenita en Telegram"
          itemImgixId="Y7FF7vX"
          size={32}
          href="https://t.me/lacolmenita"/>
      </ul>
    </div>
  )
}