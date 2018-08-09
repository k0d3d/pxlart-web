import React from "react"

import ButtonBtn from '../../buttons/button'
import { lang } from '../../../lib/lang.en'
import uniqueid from 'lodash/uniqueId'

import './fc.css'

const { teaserText, title, subTitle, enrollBtn, theHook } = lang.foundationClass

const FoundationClassSection = () => (
  <section id="foundation-class">
    <div className="row">
      <div className="col foundation-sale">
        <h4>{teaserText}</h4>
        <h1>{title}</h1>
        <h5>{subTitle}</h5>
        <ButtonBtn btnText="Training" btnxs />
      </div>
    </div>
    <div className="row">
      <div className="col">
        <div className="centered-box">
          <div className="row no-gutters">
            <div className="col-md-6 col-sm-12">
            {
              theHook.map(comfyBorders => (
                <div key={uniqueid()}>
                      <div className="comfy-borders">
                        <h5>{ comfyBorders.title }</h5>
                      </div>
                      <div className="comfy-borders">
                        <article>
                          {
                            comfyBorders.content
                          }
                        </article>
                      </div>
                </div>
              ))
            
            }

            </div>
            <div className="col-6" />
          </div>
          <div className="row">
            <div className="col">
              <ButtonBtn
                href="https://paystack.com/pay/intro2js"
                className="d-inline-block text-center float-right"
                btnred
                btnhomeherocta
                atag
              >
                { enrollBtn }
              </ButtonBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default FoundationClassSection