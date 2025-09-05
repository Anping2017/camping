import { message } from 'antd'

export const showSuccess = (msg: string) => {
  message.success(msg)
}

export const showError = (msg: string) => {
  message.error(msg)
}

export const showWarning = (msg: string) => {
  message.warning(msg)
}

export const formatDate = (date: string | Date) => {
  return new Date(date).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  })
}

export const formatCurrency = (amount: number, currency: string = 'NZD') => {
  return new Intl.NumberFormat('zh-CN', {
    style: 'currency',
    currency
  }).format(amount)
}

export const formatPercentage = (value: number) => {
  return `${(value * 100).toFixed(1)}%`
}

export const getStatusColor = (status: string) => {
  const statusMap: Record<string, string> = {
    active: 'success',
    pending: 'warning',
    inactive: 'default',
    suspended: 'error',
    rejected: 'error',
    verified: 'success',
    unverified: 'warning'
  }
  return statusMap[status] || 'default'
}

export const getStatusText = (status: string) => {
  const statusMap: Record<string, string> = {
    active: '运营中',
    pending: '待审核',
    inactive: '已关闭',
    suspended: '已暂停',
    rejected: '已拒绝',
    verified: '已验证',
    unverified: '未验证'
  }
  return statusMap[status] || status
}

export const validateMessages = {
  required: '${label}不能为空',
  types: {
    email: '请输入有效的邮箱地址',
    number: '请输入有效的数字',
    url: '请输入有效的URL'
  },
  number: {
    min: '${label}不能小于 ${min}',
    max: '${label}不能大于 ${max}',
    range: '${label}必须在 ${min} 和 ${max} 之间'
  },
  string: {
    len: '${label}必须是 ${len} 个字符',
    min: '${label}不能少于 ${min} 个字符',
    max: '${label}不能超过 ${max} 个字符',
    range: '${label}必须在 ${min} 到 ${max} 个字符之间'
  }
}
