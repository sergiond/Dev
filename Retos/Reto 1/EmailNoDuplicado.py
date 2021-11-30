#!/usr/bin/env python
# coding: utf-8

# In[5]:


import pandas as pd

# Leo la ruta del excel creado con dos columnas, una nombre y otra Email en la hoja1, elimino duplicados e imprimo
# Estructura excel nombres_email.xlsx
# Nombre	Email
# aaa	aaa@aaa.com
# aaa1	aaa@aaa.com
# bbb	bbb@bbb.com
# ccc	ccc@ccc.com
# ddd	ddd@ddd.com

ruta = 'nombres_email.xlsx'
df = pd.read_excel(io=ruta, sheet_name="Hoja1")
df = df.drop_duplicates(subset=['Email'])
print(df)
