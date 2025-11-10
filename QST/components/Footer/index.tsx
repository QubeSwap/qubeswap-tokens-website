
import { BsTwitter, BsGithub } from "react-icons/bs"
import { FaTelegramPlane } from "react-icons/fa"
import { CustomLink } from "../CustomLink"

export const Footer = () => {
  return (
    <div className="flex flex-col gap-2 p-4">
      <div className='flex items-center justify-center gap-6'>
        <hr className='w-10 bg-white' />
        <CustomLink href="https://x.com/QubeSwap">
          <BsTwitter color='white' />
        </CustomLink>
        <CustomLink href="https://t.me/QubeSwap">
          <FaTelegramPlane color='white' />
        </CustomLink>
        <CustomLink href="https://github.com/QubeSwap">
          <BsGithub color='white' />
        </CustomLink>
        <hr className='w-10 bg-white' />
      </div>
    </div>
  )
}
