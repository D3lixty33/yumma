import { createClient } from '@/lib/supabase/server'
import { cookies } from 'next/headers'
import { cn } from '@/lib/utils'

export default async function Product({
  className,
}:React.ComponentProps<"ul">) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const { data: products } = await (supabase.from('products').select('*'))
return (
    <ul className={cn('', className)}>
      {products?.map((p) => (
        <li key={p.id}>{p.product}</li>
      ))}
    </ul>
  )
}