import React from 'react'

const Title = ({
    title1,
    title2,
    titleStyles,
    title1Styles,
    paraStyles,
    para,
}) => {
  return (
    <div className={titleStyles}>
        <h3 className={'${title1Styles} h3 capitalize'}>
            {title1}
            <span className='font-light text-secondary'>{title2}</span>
        </h3>
        <div className='w-24 h-[3px] rounded-full bg-gradient-to-r from-secondary to-[#DDD9FF]'>
            <p className={'${paraStyles} max-w-lg mt-2'}>
                {para
                    ?para
                    :"Discover conmetics that enhance beauty.deliver radiance and ring confidence to you daily routine"
                }
            </p>
        </div>

    </div>
  )
}

export default Title